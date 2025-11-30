import { useRef, useCallback } from 'react';

export const useHorizontalSnap = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = useCallback(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: width * 0.8, behavior: 'smooth' });
    }
  }, []);

  const scrollPrev = useCallback(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: -(width * 0.8), behavior: 'smooth' });
    }
  }, []);

  return { scrollRef, scrollNext, scrollPrev };
};
