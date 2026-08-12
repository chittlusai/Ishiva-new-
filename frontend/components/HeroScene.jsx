"use client";
import { useEffect, useRef } from "react";

export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let w, h;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let targetMx = mx;
    let targetMy = my;

    const onMouseMove = (e) => {
      targetMx = e.clientX;
      targetMy = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

      const orbs = [
        { x: w * 0.2, y: h * 0.3, r: Math.max(w, h) * 0.55, color: [212, 175, 55], vx: 0.25, vy: 0.18, mouseFollow: true },
        { x: w * 0.8, y: h * 0.7, r: Math.max(w, h) * 0.5,  color: [10, 17, 40],  vx: -0.2, vy: 0.22, mouseFollow: false },
        { x: w * 0.5, y: h * 0.9, r: Math.max(w, h) * 0.6,  color: [28, 37, 65], vx: 0.15, vy: -0.18, mouseFollow: false },
      ];

    const drawSoftOrb = (cx, cy, r, rgb) => {
      const layers = [
        { rMult: 1.0,  alpha: 0.18 },
        { rMult: 0.65, alpha: 0.22 },
        { rMult: 0.35, alpha: 0.25 },
      ];
      layers.forEach(({ rMult, alpha }) => {
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * rMult);
        grad.addColorStop(0,   `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`);
        grad.addColorStop(0.5, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha * 0.4})`);
        grad.addColorStop(1,   `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r * rMult, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      mx += (targetMx - mx) * 0.04;
      my += (targetMy - my) * 0.04;
      ctx.globalCompositeOperation = "multiply";

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r * 0.5) orb.vx *= -1;
        if (orb.x > w + orb.r * 0.5) orb.vx *= -1;
        if (orb.y < -orb.r * 0.5) orb.vy *= -1;
        if (orb.y > h + orb.r * 0.5) orb.vy *= -1;

        let drawX = orb.x;
        let drawY = orb.y;
        if (orb.mouseFollow) {
          drawX += (mx - w / 2) * 0.25;
          drawY += (my - h / 2) * 0.25;
        }
        drawSoftOrb(drawX, drawY, orb.r, orb.color);
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);


  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      />
      {/* Deep luxury vignette mask to blend edges smoothly into the cream background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 0%, #FAF9F6 90%)" }} />
      {/* Subtle Noise Texture for high-end cinematic feel */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')", mixBlendMode: "overlay" }} />
    </div>
  );
}
