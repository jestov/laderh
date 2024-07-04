import { useState, useEffect } from 'react';
import LogoAnimated from './LogoAnimated';

const Loading = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const firstLoad = !localStorage.getItem('firstLoadDone');
      setIsFirstLoad(firstLoad);

      if (firstLoad) {
        localStorage.setItem('firstLoadDone', 'true');
        setTimeout(() => {
          setIsVisible(false);
        }, 5500); // Adjusted delay
      } else if (!isLoading) {
        setTimeout(() => {
          setIsVisible(false);
        }, 5500); // Shorter delay for subsequent loads
      }
    }
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-pink z-50 transition-all duration-500  transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-100'
      }`}
    >
      <LogoAnimated />
    </div>
  );
};

export default Loading;
