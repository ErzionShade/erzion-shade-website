'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const mainCursor = useRef(null);
  const followerCursor = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    if (isMobile) return;

    // 🔥 ULTRA-FAST POSITION UPDATES
    let posX = 0, posY = 0;
    let followerX = 0, followerY = 0;
    let animationFrameId;

    const moveCursor = (e) => {
      posX = e.clientX;
      posY = e.clientY;
      
      // Main cursor (instant position)
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate(calc(${posX}px - 50%), calc(${posY}px - 50%)`;
      }
    };

    const animateFollower = () => {
      // 🔥 Tighter follow effect (0.3 instead of 0.15 for faster response)
      followerX += (posX - followerX) * 0.3; // More aggressive follow
      followerY += (posY - followerY) * 0.3;

      if (followerCursor.current) {
        followerCursor.current.style.transform = `translate(calc(${followerX}px - 50%), calc(${followerY}px - 50%)`;
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Event listeners
    const events = [
      ['mousemove', moveCursor],
      ['mousedown', () => setIsClicked(true)],
      ['mouseup', () => setIsClicked(false)],
      ['mouseover', (e) => setIsHovering(!!e.target.closest('button, a, [data-hoverable]'))],
      ['mouseout', () => setIsHovering(false)]
    ];

    events.forEach(([event, handler]) => window.addEventListener(event, handler));

    return () => {
      events.forEach(([event, handler]) => window.removeEventListener(event, handler));
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Follower Cursor (Now with faster tracking) */}
      <div
        ref={followerCursor}
        className={`
          pointer-events-none fixed left-0 top-0 z-[99999] 
          w-14 h-14 rounded-full border-2 border-yellow-400/60 
          transition-transform duration-100 ease-linear mix-blend-difference
          ${isHovering ? 'scale-125 !border-yellow-300' : ''}
        `}
        style={{ willChange: 'transform' }}
      />
      
      {/* Main Cursor (Dot) */}
      <div
        ref={mainCursor}
        className={`
          pointer-events-none fixed left-0 top-0 z-[99999] 
          w-2.5 h-2.5 rounded-full bg-yellow-400 
          transition-all duration-75 ease-out mix-blend-difference
          ${isClicked ? 'scale-150' : ''}
        `}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}