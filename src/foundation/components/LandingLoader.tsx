'use client';

import { CSSProperties } from 'react';
import { useLandingStore } from '../../store/landing/landing.store';
import { Text } from '../../ui/components/Text';

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

      <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#96C1F2]">
        <div data-name="wave1" className="bottom-[15vh] rounded-[45%]" style={waveStyle} />
        <div data-name="wave2" className="bottom-[12vh] rounded-[47%] opacity-50" style={waveStyle} />

        <Text className="z-10 text-lg font-semibold text-zinc-800">
          You are diving into {`'`}JSON Sea{`'`}...
        </Text>
      </div>
    </>
  );
};

export const LandingLoader = _LandingLoader;
