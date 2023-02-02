'use client';

import { useLanding } from '../../store/landing/hooks/useLanding';

// TODO: Styling loading spinner
// (it would be better having css pure spinner instead of NextUI)
const _LandingLoader = () => {
  const { isAppInitalized } = useLanding();

  if (isAppInitalized) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
      }}
    >
      <h2 style={{ color: 'black', fontSize: '18px' }}>🌊 You are diving into JSON Sea now...</h2>
    </div>
  );
};

export const LandingLoader = _LandingLoader;
