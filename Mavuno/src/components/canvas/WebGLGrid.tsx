"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface WebGLGridProps {
  backgroundIntensity?: number // 0 = dark, 1 = light
}

export default function WebGLGrid({ backgroundIntensity = 0 }: WebGLGridProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const gridRef = useRef<THREE.Group | null>(null)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const mountElement = mountRef.current
    if (!mountElement) return

    // Check WebGL support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      console.warn('WebGL not supported, skipping grid render')
      return
    }

    try {
      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false
      })
    
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      renderer.domElement.style.position = 'absolute'
      renderer.domElement.style.top = '0'
      renderer.domElement.style.left = '0'
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      mountElement.appendChild(renderer.domElement)
      
      sceneRef.current = scene
      rendererRef.current = renderer
      cameraRef.current = camera

      // Camera position for vertical background view
      camera.position.set(0, 0, 8)
      camera.lookAt(0, 0, 0)

    // Create grid group
    const gridGroup = new THREE.Group()
    
    // Grid parameters
    const gridSize = 20
    const divisions = 40

    // Vertex shader for animated grid
    const vertexShader = `
      uniform float time;
      uniform vec2 resolution;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        
        // Add subtle wave animation - adjust speed based on background
        vec3 pos = position;
        float waveSpeed = 0.5; // Will be controlled by JavaScript based on backgroundIntensity
        pos.z += sin(pos.x * 0.5 + time * waveSpeed) * 0.1 + cos(pos.y * 0.3 + time * waveSpeed * 0.7) * 0.05;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `

    // Fragment shader for disconnected grid lines
    const fragmentShader = `
      uniform float time;
      uniform vec2 resolution;
      uniform float backgroundIntensity;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        // Grid calculation
        vec2 gridPos = fract(vPosition.xy * 2.0);
        vec2 grid = abs(gridPos - 0.5);
        
        // Distance to grid intersection points
        vec2 toCenter = abs(gridPos - 0.5);
        float distToIntersection = length(toCenter);
        
        // Create gaps around intersection points (dots)
        float gapRadius = 0.15; // Size of gap around each dot
        float gapMask = 1.0 - smoothstep(gapRadius - 0.05, gapRadius, distToIntersection);
        
        // Grid lines
        float line = min(grid.x, grid.y);
        float glow = 1.0 - smoothstep(0.0, 0.05, line);
        
        // Apply gap mask to create disconnected lines
        glow *= (1.0 - gapMask);
        
        
        // Add electrical current effect on remaining lines - stop on white background
        float timeMultiplier = mix(0.25, 0.0, backgroundIntensity); // Completely stop on white background
        float current = sin(vPosition.x * 3.0 + time * timeMultiplier) * sin(vPosition.y * 2.5 + time * timeMultiplier * 0.6);
        current = smoothstep(0.7, 1.0, current);
        
        // Intersection dots - only show at grid intersections
        float dotGlow = smoothstep(gapRadius, gapRadius - 0.03, distToIntersection);
        dotGlow *= smoothstep(0.05, 0.02, distToIntersection); // Sharp dot edge
        
        
        // Adaptive colors based on background
        // Dark background colors
        vec3 darkGridColor = vec3(0.3, 0.6, 0.9); // Blue-ish grid lines
        vec3 darkCurrentColor = vec3(1.0, 0.8, 0.2); // Golden current
        vec3 darkDotColor = vec3(0.4, 0.8, 1.0); // Brighter blue dots
        
        // Light background colors - with green neon flow
        vec3 lightGridColor = vec3(0.0, 0.7, 0.2); // Green grid lines
        vec3 lightCurrentColor = vec3(0.0, 1.0, 0.3); // Bright green current flow
        vec3 lightDotColor = vec3(0.0, 0.9, 0.1); // Bright green dots
        
        // Interpolate colors based on background intensity
        vec3 gridColor = mix(darkGridColor, lightGridColor, backgroundIntensity);
        vec3 currentColor = mix(darkCurrentColor, lightCurrentColor, backgroundIntensity);
        vec3 dotColor = mix(darkDotColor, lightDotColor, backgroundIntensity);
        
        // Adjust intensity based on background
        float baseIntensity = mix(0.3, 1.0, backgroundIntensity); // Maximum strength on light backgrounds
        float currentIntensity = mix(1.0, 0.8, backgroundIntensity); // Keep current strong on light
        float dotIntensity = mix(0.8, 0.9, backgroundIntensity); // Make dots even more visible on light
        
        // Combine line color with current effect
        vec3 lineColor = mix(gridColor * glow * baseIntensity, currentColor, current * glow * currentIntensity);
        
        // Add dots
        vec3 finalColor = lineColor + dotColor * dotGlow * dotIntensity;
        float finalAlpha = max(glow * (0.5 + backgroundIntensity * 0.5), dotGlow * (0.6 + backgroundIntensity * 0.4));
        
        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `

    // Create grid plane with custom shader - make it much larger to ensure fullscreen coverage
    const aspect = window.innerWidth / window.innerHeight
    const gridWidth = gridSize * aspect * 4 // Make it much wider
    const gridHeight = gridSize * 8 // Make it much taller to cover full screen
    const gridGeometry = new THREE.PlaneGeometry(gridWidth, gridHeight, divisions * aspect * 4, divisions * 8)
    const gridMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        backgroundIntensity: { value: 0.0 } // 0 = dark background, 1 = light background
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending
    })

    const gridPlane = new THREE.Mesh(gridGeometry, gridMaterial)
    // Keep it vertical like a background wall (no rotation)
    gridGroup.add(gridPlane)

    // Remove the horizontal grid helper since we want vertical background

    // Dots are now created in the shader, no need for separate geometry

    scene.add(gridGroup)
    gridRef.current = gridGroup

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      timeRef.current += 0.016 // ~60fps
      
      // Update shader uniforms
      if (gridMaterial.uniforms) {
        gridMaterial.uniforms.time.value = timeRef.current
        gridMaterial.uniforms.backgroundIntensity.value = backgroundIntensity
      }
      
      // Subtle camera movement for parallax effect (vertical background) - stop on white background
      const cameraSpeed = backgroundIntensity === 1 ? 0.0 : 0.05; // Completely stop on white background
      camera.position.x = Math.sin(timeRef.current * cameraSpeed) * 1
      camera.position.y = Math.cos(timeRef.current * cameraSpeed * 0.8) * 0.5
      camera.position.z = 8 + Math.cos(timeRef.current * cameraSpeed * 1.5) * 0.5
      camera.lookAt(0, 0, 0)
      
      // Animation is now handled in the shader
      
      renderer.render(scene, camera)
    }
    
    animate()

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        
        // Update grid geometry to match new aspect ratio
        const newAspect = window.innerWidth / window.innerHeight
        const newGridWidth = gridSize * newAspect * 4 // Keep it much wider
        const newGridHeight = gridSize * 8 // Keep much extended height on resize
        gridPlane.geometry.dispose()
        gridPlane.geometry = new THREE.PlaneGeometry(newGridWidth, newGridHeight, divisions * newAspect * 4, divisions * 8)
        
        if (gridMaterial.uniforms) {
          gridMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
        }
      }
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement)
      }
      renderer.dispose()
      gridMaterial.dispose()
      gridGeometry.dispose()
    }
  } catch (error) {
    console.error('Error setting up WebGL grid:', error)
  }
  }, [backgroundIntensity])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}