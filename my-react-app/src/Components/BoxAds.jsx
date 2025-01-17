import React, { useEffect } from 'react';

const GoogleAds = () => {
  useEffect(() => {
    // Dynamically load the Google Ads script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4309202317816641';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Push ad to the adsbygoogle array once the script has loaded
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4309202317816641"
      data-ad-slot="3317014236"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAds;
