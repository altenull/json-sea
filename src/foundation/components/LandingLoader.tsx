'use client';

import { CSSProperties } from 'react';
import { useLandingStore } from '../../store/landing/landing.store';

const _LandingLoader = () => {
  const isAppInitalized = useLandingStore((state) => state.isAppInitalized);

  if (isAppInitalized) {
    return null;
  }

  const waveStyle: CSSProperties = {
    position: 'absolute',
    left: '50%',
    minWidth: '300vw',
    minHeight: '300vw',
    backgroundColor: '#ffffff',
    animationName: 'wave-anim',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationDuration: '10s',
  };

  /**
   * Should do styling with pure CSS for better UX.
   */
  return (
    <>
      <style>
        {`@keyframes wave-anim {
            0% {
              transform: translate(-50%, 0) rotateZ(0deg);
            }
            50% {
              transform: translate(-50%, -2%) rotateZ(180deg);
            }
            100% {
              transform: translate(-50%, 0%) rotateZ(360deg);
            }
          }`}
      </style>

      <div
        style={{
          position: 'fixed',
          inset: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#96C1F2',
          overflow: 'hidden',
          zIndex: 9999,
        }}
      >
        <div
          data-name="wave1"
          style={{
            ...waveStyle,
            bottom: '15vh',
            borderRadius: '45%',
          }}
        />
        <div
          data-name="wave2"
          style={{
            ...waveStyle,
            bottom: '12vh',
            opacity: '0.5',
            borderRadius: '47%',
          }}
        />

        <div
          style={{
            color: '#11181C !important', // text color in light mode
            fontSize: '18px',
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          You are diving into {`'`}JSON Sea{`'`}...
        </div>
      </div>
    </>
  );
};

export const LandingLoader = _LandingLoader;
