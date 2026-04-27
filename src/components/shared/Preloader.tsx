'use client';

import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      const timeout = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timeout);
    }

    const handleLoad = () => {
      // Small delay for smooth transition even if load is instant
      setTimeout(() => setLoading(false), 800);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">Tevso</div>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};
