import { useState, useEffect } from 'react';

type InputFocus = 'EMAIL' | 'PASSWORD' | 'IDLE';

interface UseBearAnimationProps {
  watchBearImages: string[];
  hideBearImages: string[];
  emailLength: number;
  isPeeking?: boolean;
}

export function useBearAnimation({ 
  watchBearImages, 
  hideBearImages, 
  emailLength,
  isPeeking = false
}: UseBearAnimationProps) {
  const [currentFocus, setCurrentFocus] = useState<InputFocus>('IDLE');
  const [currentBearImage, setCurrentBearImage] = useState<string | null>(null);

  useEffect(() => {
    if (currentFocus === 'EMAIL' && watchBearImages.length > 0) {
      // For email input, smoothly track characters across watch bear images
      const progress = Math.min(emailLength / 28, 1);
      const index = Math.min(
        Math.floor(progress * (watchBearImages.length - 1)),
        watchBearImages.length - 1
      );
      setCurrentBearImage(watchBearImages[Math.max(0, index)]);
    } else if (currentFocus === 'PASSWORD' && hideBearImages.length > 0) {
      if (isPeeking) {
        // Bear peeks through paws when showing password
        setCurrentBearImage(hideBearImages[1] || hideBearImages[0]);
      } else {
        // Bear hides eyes completely
        hideBearImages.forEach((img, index) => {
          setTimeout(() => setCurrentBearImage(img), index * 35);
        });
      }
    } else if (currentFocus === 'IDLE' && watchBearImages.length > 0) {
      setCurrentBearImage(watchBearImages[0]);
    }
  }, [currentFocus, hideBearImages, watchBearImages, emailLength, isPeeking]);

  return {
    currentFocus,
    setCurrentFocus,
    currentBearImage: currentBearImage ?? (watchBearImages.length > 0 ? watchBearImages[0] : null)
  };
}
