import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  originX: number;
  originY: number;
}

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const spacing = 40;
    const dotColor = '#CDD6FF';  // Subtle blue-grey to match gradient
    const magnetRadius = 400;   // Wide radius for smooth effect
    const magnetStrength = 30;  // Strong pull toward cursor
    const easeSpeed = 0.12;     // Fluid easing for smooth return
    const centerFadeRadius = 0.23; // Fraction of screen width where dots start fading

    const resizeCanvas = () => {
      // Use viewport dimensions for a fixed canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      dotsRef.current = [];
      // Create dots for the entire scrollable area
      const cols = Math.ceil(window.innerWidth / spacing) + 2;
      // Create enough rows for typical page scroll
      const rows = Math.ceil((document.documentElement.scrollHeight || 5000) / spacing) + 2;

      const offsetX = -7;
      const offsetY = -9;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + offsetX;
          const y = j * spacing + offsetY;
          dotsRef.current.push({
            x,
            y,
            originX: x,
            originY: y,
          });
        }
      }
    };

    const animate = () => {
      // Draw background with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#f0f8ff');      // Light blue on left
      gradient.addColorStop(0.2, '#F4F4F4');    // Main background color
      gradient.addColorStop(0.8, '#F4F4F4');    // Main background color
      gradient.addColorStop(1, '#f0f8ff');      // Light blue on right
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y + scrollY;

      dotsRef.current.forEach((dot) => {
        // Calculate screen position of dot
        const screenY = dot.originY - scrollY;

        // Only process and draw dots that are visible on screen
        if (screenY > -spacing && screenY < window.innerHeight + spacing) {
          const dx = mouseX - dot.originX;
          const dy = mouseY - dot.originY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate target position
          let targetX = dot.originX;
          let targetY = dot.originY;
          let magnetInfluence = 0;

          if (distance < magnetRadius) {
            // Smooth cubic easing for force falloff
            const normalizedDist = distance / magnetRadius;
            magnetInfluence = Math.pow(1 - normalizedDist, 2);
            const force = magnetInfluence * magnetStrength;
            const angle = Math.atan2(dy, dx);
            targetX = dot.originX + Math.cos(angle) * force;
            targetY = dot.originY + Math.sin(angle) * force;
          }

          // Smooth interpolation to target (fluid movement)
          dot.x += (targetX - dot.x) * easeSpeed;
          dot.y += (targetY - dot.y) * easeSpeed;

          // Calculate opacity based on distance from center (fade out in center)
          const centerX = canvas.width / 2;
          const distFromCenter = Math.abs(dot.x - centerX);
          const fadeStart = canvas.width * centerFadeRadius;
          const fadeEnd = canvas.width * 0.15; // Fully transparent zone

          let opacity = 1;
          if (distFromCenter < fadeStart) {
            // Smooth fade from edge to center
            opacity = Math.max(0, (distFromCenter - fadeEnd) / (fadeStart - fadeEnd));
            opacity = opacity * opacity; // Ease-in for smoother fade
          }

          // Interpolate color: normal (#CDD6FF) to darker blue (#7B8FD4) based on magnet influence
          const r = Math.round(205 - magnetInfluence * 82);  // 205 -> 123
          const g = Math.round(214 - magnetInfluence * 71);  // 214 -> 143
          const b = Math.round(255 - magnetInfluence * 43);  // 255 -> 212

          // Draw the dot at its screen position with calculated opacity and color
          if (opacity > 0.01) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y - scrollY, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.fill();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Re-init dots when page content changes height
    let lastHeight = document.documentElement.scrollHeight;
    const checkHeight = () => {
      const newHeight = document.documentElement.scrollHeight;
      if (newHeight !== lastHeight) {
        lastHeight = newHeight;
        initDots();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Check height periodically
    const heightInterval = setInterval(checkHeight, 1000);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      clearInterval(heightInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
