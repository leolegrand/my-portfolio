import React, { useEffect } from 'react';

const PortraitLock = () => {
  useEffect(() => {
    // Lock the screen orientation to portrait mode when the component mounts.
    const lockPortraitOrientation = () => {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait').catch((err) => {
          console.warn('Failed to lock screen in portrait mode:', err);
        });
      }
    };

    lockPortraitOrientation();

    // Optionally, you can unlock the orientation when the component unmounts.
    return () => {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, []);

  return null; // This component doesn't render anything; it just locks the orientation.
};

export default PortraitLock;