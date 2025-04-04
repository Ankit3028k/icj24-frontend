import React, { useEffect } from 'react';

const AdsenseAd = () => {
  useEffect(() => {
    // Load Google AdSense script only if not already loaded
    const existingScript = document.getElementById('adsense-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4309202317816641";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.id = 'adsense-script'; // Give the script an ID for easy future reference
      document.head.appendChild(script);

      // Push the ad after the script is loaded
      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };

      // Optional: Handle script loading failure
      script.onerror = () => {
        console.error('Failed to load Google AdSense script.');
      };
    }

    return () => {
      // Clean up the script if the component is unmounted
      const script = document.getElementById('adsense-script');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <ins 
      className="adsbygoogle"
      style={{ display: 'block', width: '100%', maxWidth: '728px', height: '90px' }}
      data-ad-client="ca-pub-4309202317816641"
      data-ad-slot="9428585883"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsenseAd;
