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
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }

        return () => {
            document.head.removeChild(script);
        };
    }, [adClient]);

    return (
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client={adClient}
             data-ad-slot={adSlot}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
    );
};

export default AdSense;
