import { useEffect } from 'react';

interface AdSenseProps {
  adClient: string;
  adSlot: string;
}

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const AdSense = ({ adClient, adSlot }: AdSenseProps) => {
  useEffect(() => {
    const adpush = setTimeout(()=>{
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }, 100);

    return () => {
      clearTimeout(adpush);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
