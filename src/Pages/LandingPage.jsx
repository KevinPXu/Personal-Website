import React, { useRef, useEffect } from 'react';

function LandingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallax = scrollTop * 0.5;
      container.style.backgroundPositionY = `${parallax}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='LandingContainer'
      ref={containerRef}>
      <div className='landingHeader'>
        <h1 className='text'>WELCOME</h1>
      </div>
    </div>
  );
}

export default LandingPage;
