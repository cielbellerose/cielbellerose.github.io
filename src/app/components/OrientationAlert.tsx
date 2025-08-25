'use client';

import { useEffect, useState } from 'react';

export default function OrientationAlert() {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobileLandscape(isLandscape && isMobile);
    };

    checkOrientation();
    
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  if (!isMobileLandscape) return null;

  return (
    <div className="orientation-alert">
      <div>
        <h2>Please rotate your device</h2>
        <p>This website is best viewed in portrait mode.</p>
      </div>
    </div>
  );
}