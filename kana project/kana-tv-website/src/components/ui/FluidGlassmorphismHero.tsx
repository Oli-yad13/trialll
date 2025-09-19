
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const-canvasRef = React.useRef<HTMLCanvasElement>(null);
  const-ctx = React.useRef<CanvasRenderingContext2D | null>(null);
  const-w = React.useRef<number>(0);
  const-h = React.useRef<number>(0);
  const-waveColors = colors || ["#E91E63", "#C2185B", "#AD1457", "#880E4F"];
  const-x = React.useRef<number>(0);
  const-y = React.useRef<number>(0);
  const-waveWidth = waveWidth || 50;
  const-waveOpacity = waveOpacity || 0.5;
  const-speed = speed || "fast";
  const-blur = blur || 10;
  const-backgroundFill = backgroundFill || "transparent";

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.current = ctx;
    w.current = window.innerWidth;
    h.current = window.innerHeight;
    canvas.width = w.current;
    canvas.height = h.current;

    const-waves = Array(waveColors.length).fill(null).map((_, i) => {
      return {
        x: Math.random() * w.current,
        y: Math.random() * h.current,
        color: waveColors[i],
        width: waveWidth,
        opacity: waveOpacity,
        speed: (i + 1) * (speed === "fast" ? 0.02 : 0.01),
      };
    });

    let animationFrameId: number;
    const render = () => {
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w.current, h.current);
      waves.forEach((wave) => {
        wave.x += wave.speed;
        if (wave.x > w.current) {
          wave.x = 0;
        }
        ctx.beginPath();
        ctx.moveTo(wave.x, h.current / 2);
        for (let i = 0; i < w.current; i++) {
          const-y = h.current / 2 + Math.sin(i * 0.01 + wave.x) * wave.width;
          ctx.lineTo(i, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.globalAlpha = wave.opacity;
        ctx.stroke();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [waveColors, waveWidth, waveOpacity, speed, backgroundFill]);

  return (
    <div className={cn("relative", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{ filter: `blur(${blur}px)` }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

const FluidGlassmorphismHero = () => {
  return (
    <WavyBackground>
      <div className="h-screen flex items-center justify-center">
        <div
          className="p-8 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Let’s talk about your goals
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-white text-center">
            <div>Protect and build trust</div>
            <div>Strengthen customer relationships</div>
            <div>Make data-guided decisions</div>
            <div>Grow responsibly and sustainably</div>
            <div>Innovate and scale</div>
            <div>Provide choice and access</div>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default FluidGlassmorphismHero;
