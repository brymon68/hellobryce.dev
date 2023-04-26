import React, { useEffect, useRef, useState } from 'react';
import Meta from '@/components/meta';
import Head from 'next/head';
import NET from 'vanta/dist/vanta.net.min';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          backgroundColor: '#2A303C',
          points: 20
        })
      );
    }
    return () => {
      if (vantaEffect) NET.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="min-h-screen" ref={myRef}>
        <main>{children}</main>
      </div>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          async
        ></script>
        <Meta />
      </Head>
    </>
  );
}
