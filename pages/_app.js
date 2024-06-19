import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import { detectBackgroundImageLoad } from '../utils/detectBackgroundImageLoad';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    let isInitialLoad = true;
    
    const handleRouteChangeStart = () => setLoading(true);

    const handleRouteChangeComplete = async () => {
      // Specify the URL of the background images
      const backgroundImageUrl = '/img/bg-podcast.jpg';
      const backgroundImageUrlMobile = '/img/bg-podcast-mobile.jpg';

      // Create promises for image loading
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      );

      // Add background image load promises
      imagePromises.push(detectBackgroundImageLoad(backgroundImageUrlMobile));
      imagePromises.push(detectBackgroundImageLoad(backgroundImageUrl));

      await Promise.all(imagePromises);
      handleLoad();
    };

    // Event listeners for route change
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Initial load handling
    if (isInitialLoad) {
      handleRouteChangeComplete();
      isInitialLoad = false;
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <Loading isLoading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
