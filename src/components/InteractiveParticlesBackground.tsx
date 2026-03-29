import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  twinkle: number;
  twinkleSpeed: number;
};

type TrailSpark = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
};

const InteractiveParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = reducedMotionQuery.matches;
    const motionScale = isReducedMotion ? 0.42 : 1;

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue("--accent").trim();
    const primary = styles.getPropertyValue("--primary").trim();

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.3,
      active: false,
    };

    let particles: Particle[] = [];
    let trail: TrailSpark[] = [];

    const createParticles = () => {
      const density = window.innerWidth > 1024 ? 140 : window.innerWidth > 640 ? 100 : 70;

      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24 * motionScale,
        vy: (Math.random() - 0.5) * 0.24 * motionScale,
        size: Math.random() * 1.15 + 0.45,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: (Math.random() * 0.035 + 0.01) * motionScale,
      }));

      trail = [];
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const drawScene = () => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.twinkle += particle.twinkleSpeed;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }

        context.beginPath();
        context.fillStyle = `hsl(${primary})`;
        context.globalAlpha = 0.12 + (Math.sin(particle.twinkle) + 1) * 0.12;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const particleA = particles[i];

        if (pointer.active) {
          const distanceToPointer = Math.hypot(particleA.x - pointer.x, particleA.y - pointer.y);

          if (distanceToPointer < 110) {
            const push = (110 - distanceToPointer) / 110;
            particleA.vx += (particleA.x - pointer.x) * 0.000045 * push;
            particleA.vy += (particleA.y - pointer.y) * 0.000045 * push;

            context.beginPath();
            context.fillStyle = `hsl(${accent})`;
            context.globalAlpha = (1 - distanceToPointer / 110) * 0.35;
            context.arc(particleA.x, particleA.y, Math.max(particleA.size * 1.35, 0.95), 0, Math.PI * 2);
            context.fill();
            context.globalAlpha = 1;
          }
        }

        particleA.vx *= 0.996;
        particleA.vy *= 0.996;
      }

      for (const spark of trail) {
        const progress = spark.life / spark.maxLife;
        context.beginPath();
        context.fillStyle = `hsl(${accent})`;
        context.globalAlpha = progress * 0.35;
        context.arc(spark.x, spark.y, spark.size * progress, 0, Math.PI * 2);
        context.fill();
      }

      if (pointer.active) {
        context.beginPath();
        context.strokeStyle = `hsl(${accent})`;
        context.globalAlpha = 0.26;
        context.lineWidth = 1;
        context.arc(pointer.x, pointer.y, 26, 0, Math.PI * 2);
        context.stroke();

        context.beginPath();
        context.fillStyle = `hsl(${accent})`;
        context.globalAlpha = 0.35;
        context.arc(pointer.x, pointer.y, 2.2, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
      }

      trail = trail
        .map((spark) => ({ ...spark, life: spark.life - 1 }))
        .filter((spark) => spark.life > 0);

      frameId = window.requestAnimationFrame(drawScene);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      container.style.setProperty("--cursor-x", `${event.clientX}px`);
      container.style.setProperty("--cursor-y", `${event.clientY}px`);

      trail.push(
        {
          x: event.clientX + (Math.random() - 0.5) * 14,
          y: event.clientY + (Math.random() - 0.5) * 14,
          life: Math.max(9, Math.floor(16 * motionScale)),
          maxLife: Math.max(9, Math.floor(16 * motionScale)),
          size: 7,
        },
        {
          x: event.clientX + (Math.random() - 0.5) * 20,
          y: event.clientY + (Math.random() - 0.5) * 20,
          life: Math.max(7, Math.floor(12 * motionScale)),
          maxLife: Math.max(7, Math.floor(12 * motionScale)),
          size: 5,
        },
      );

      if (trail.length > 70) {
        trail.splice(0, trail.length - 70);
      }
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    resizeCanvas();
    container.style.setProperty("--cursor-x", `${pointer.x}px`);
    container.style.setProperty("--cursor-y", `${pointer.y}px`);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    frameId = window.requestAnimationFrame(drawScene);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="interactive-particle-bg" aria-hidden="true">
      <div className="interactive-particle-ambient" />
      <div className="interactive-particle-stars" />
      <canvas ref={canvasRef} className="interactive-particle-canvas" />
      <div className="interactive-particle-vignette" />
    </div>
  );
};

export default InteractiveParticlesBackground;