import { useEffect } from "react";

const GoogleAds = () => {
  useEffect(() => {
    const scriptSrc =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4309202317816641";
    let script = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!script) {
      // Load the script if it doesn't exist
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }

    const handleAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle push failed:", e);
      }
    };

    // Add event listener to ensure the ads are pushed once the script is loaded
    if (window.adsbygoogle) {
      handleAds();
    } else {
      script.onload = handleAds;
    }

    return () => {
      // Optional: Don't remove the script unless absolutely necessary
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4309202317816641"
      data-ad-slot="3317014236"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAds;
