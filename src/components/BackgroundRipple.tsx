"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RippleProps {
  className?: string;
  rippleCount?: number;
}

interface ParticleStyle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export default function BackgroundRipple({ 
  className, 
  rippleCount = 6 
}: RippleProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; delay: number }>>([]);
  const [particles, setParticles] = useState<ParticleStyle[]>([]);
  const [smallDots, setSmallDots] = useState<ParticleStyle[]>([]);
  const [tinyDots, setTinyDots] = useState<ParticleStyle[]>([]);
  const [accentCircles, setAccentCircles] = useState<ParticleStyle[]>([]);
  const [driftDots, setDriftDots] = useState<ParticleStyle[]>([]);
  const [pulseDots, setPulseDots] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const newRipples = Array.from({ length: rippleCount - 1 }, (_, i) => ({
      id: i,
      delay: (i + 1) * 0.8, // Stagger the animations, start from 0.8s
    }));
    setRipples(newRipples);

    // Generate particles with consistent random values
    const newParticles = Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }));
    setParticles(newParticles);

    // Generate small dots
    const newSmallDots = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${3 + Math.random() * 5}s`,
    }));
    setSmallDots(newSmallDots);

    // Generate tiny dots
    const newTinyDots = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setTinyDots(newTinyDots);

    // Generate accent circles
    const newAccentCircles = Array.from({ length: 3 }, () => ({
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${6 + Math.random() * 3}s`,
    }));
    setAccentCircles(newAccentCircles);

    // Generate drift dots
    const newDriftDots = Array.from({ length: 18 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 12}s`,
      animationDuration: `${8 + Math.random() * 6}s`,
    }));
    setDriftDots(newDriftDots);

    // Generate pulse dots
    const newPulseDots = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }));
    setPulseDots(newPulseDots);
  }, [rippleCount]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-blue-400/20 dark:border-blue-300/15 bg-gradient-to-r from-blue-50/5 to-indigo-50/5 dark:from-blue-400/5 dark:to-indigo-400/5 animate-ripple"
          style={{
            animationDelay: `${ripple.delay}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      
    
      
    
      {/* Drifting dots */}
      <div className="absolute inset-0">
        {driftDots.map((dot, i) => (
          <div
            key={`drift-dot-${i}`}
            className="absolute w-1 h-1 bg-indigo-400/20 dark:bg-indigo-300/15 rounded-full animate-drift"
            style={dot}
          />
        ))}
      </div>
      
    
    </div>
  );
}
