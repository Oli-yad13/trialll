"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const flowLinesRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)
    
    sceneRef.current = scene
    rendererRef.current = renderer
    cameraRef.current = camera

    // Camera position
    camera.position.z = 5

    // Create particles
    const particleCount = 200
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 10
      
      // Green technical variations
      colors[i] = 0.1 + Math.random() * 0.2 // R
      colors[i + 1] = 0.6 + Math.random() * 0.4 // G
      colors[i + 2] = 0.2 + Math.random() * 0.3 // B
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })
    
    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)
    particlesRef.current = particleSystem

    // Create flowing connection lines
    const flowGroup = new THREE.Group()
    
    // Create curved lines connecting the steps
    for (let i = 0; i < 3; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-4 + i * 4, 2, 0),
        new THREE.Vector3(-2 + i * 4, 0, 1),
        new THREE.Vector3(0 + i * 4, -1, 0),
        new THREE.Vector3(2 + i * 4, 1, -1)
      ])
      
      const points = curve.getPoints(50)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0x22c55e),
        transparent: true,
        opacity: 0.3
      })
      
      const line = new THREE.Line(geometry, material)
      flowGroup.add(line)
    }
    
    scene.add(flowGroup)
    flowLinesRef.current = flowGroup

    // Create geometric shapes
    const geometryShapes = new THREE.Group()
    
    // Add floating geometric elements
    const shapes = [
      new THREE.BoxGeometry(0.2, 0.2, 0.2),
      new THREE.OctahedronGeometry(0.15),
      new THREE.TetrahedronGeometry(0.18)
    ]
    
    for (let i = 0; i < 15; i++) {
      const geometry = shapes[Math.floor(Math.random() * shapes.length)]
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x16a34a),
        wireframe: true,
        transparent: true,
        opacity: 0.4
      })
      
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.x = (Math.random() - 0.5) * 15
      mesh.position.y = (Math.random() - 0.5) * 10
      mesh.position.z = (Math.random() - 0.5) * 5
      
      geometryShapes.add(mesh)
    }
    
    scene.add(geometryShapes)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate particles slowly
      if (particleSystem) {
        particleSystem.rotation.y += 0.001
        particleSystem.rotation.x += 0.0005
      }
      
      // Animate geometric shapes
      geometryShapes.children.forEach((child, index) => {
        child.rotation.x += 0.01 + index * 0.001
        child.rotation.y += 0.005 + index * 0.001
      })
      
      renderer.render(scene, camera)
    }
    
    animate()

    // Scroll-triggered animations
    if (typeof window !== "undefined") {
      ScrollTrigger.create({
        trigger: mountRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress
          
          // Animate particles based on scroll
          if (particleSystem) {
            particleSystem.rotation.z = progress * Math.PI * 2
          }
          
          // Animate flow lines
          if (flowGroup) {
            flowGroup.children.forEach((line, index) => {
              const material = (line as THREE.Line).material as THREE.LineBasicMaterial
              material.opacity = 0.1 + progress * 0.5
            })
          }
          
          // Camera movement
          camera.position.x = Math.sin(progress * Math.PI * 2) * 2
          camera.position.y = progress * 3 - 1.5
        }
      })

      // Process Flow specific animations
      ScrollTrigger.create({
        trigger: ".process-flow-section",
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(particleSystem.material, {
            opacity: 0.8,
            duration: 2
          })
        },
        onLeave: () => {
          gsap.to(particleSystem.material, {
            opacity: 0.2,
            duration: 1
          })
        }
      })
    }

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: 0 }}
    />
  )
}