"use client";

import { useEffect, useRef } from "react";

const LABELS = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind",
  "Node",
  "Golang",
  "REST",
];

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
};

export function NodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animId = 0;

    function resize() {
      if (!wrap || !canvas) return;
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = LABELS.map((label, i) => {
        const cols = 4;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const jitterX = (Math.random() - 0.5) * 40;
        const jitterY = (Math.random() - 0.5) * 40;
        return {
          x: (width / cols) * (col + 0.5) + jitterX,
          y: (height / 2) * (row + 0.5) + jitterY,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          label,
        };
      });
    }

    function getStyle(varName: string) {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const lineColor = getStyle("--line-strong") || "rgba(18,20,27,0.28)";
      const accent = getStyle("--accent") || "#c98a25";
      const ink = getStyle("--ink") || "#12141b";

      // update positions
      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 30 || n.x > width - 30) n.vx *= -1;
          if (n.y < 20 || n.y > height - 20) n.vy *= -1;
        }
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = width * 0.42;
          if (dist < maxDist) {
            const distToMouse = Math.min(
              Math.hypot(a.x - mouse.x, a.y - mouse.y),
              Math.hypot(b.x - mouse.x, b.y - mouse.y)
            );
            const near = distToMouse < 140;
            ctx.strokeStyle = near ? accent : lineColor;
            ctx.globalAlpha = near
              ? 0.75
              : Math.max(0.06, 1 - dist / maxDist) * 0.55;
            ctx.lineWidth = near ? 1.2 : 0.75;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // nodes + labels
      ctx.font = "10px var(--font-mono, monospace)";
      ctx.textBaseline = "middle";
      for (const n of nodes) {
        const distToMouse = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const near = distToMouse < 120;

        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? 3.4 : 2.4, 0, Math.PI * 2);
        ctx.fillStyle = near ? accent : ink;
        ctx.globalAlpha = near ? 1 : 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.fillStyle = near ? accent : ink;
        ctx.globalAlpha = near ? 0.95 : 0.4;
        ctx.fillText(n.label, n.x + 8, n.y);
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    }

    function handleMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function handleLeave() {
      mouse = { x: -9999, y: -9999 };
    }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative h-[280px] w-full sm:h-[340px] lg:h-full lg:min-h-[420px]"
      role="img"
      aria-label="Animated diagram connecting the core technologies I work with: React, Next.js, TypeScript, React Native, Tailwind, Node, Golang, and REST"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
