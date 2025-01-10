import React, { useEffect } from 'react';

const AdsenseAd = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4309202317816641";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Push the ad
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      // Clean up script if component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-4309202317816641"
         data-ad-slot="9428585883"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default AdsenseAd;
