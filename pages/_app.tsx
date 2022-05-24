import React from "react";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Image from "next/image";
import flower1 from "../public/eucalyptus_1.png";
import flower2 from "../public/eucalyptus_2.png";


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jon & Molly's Wedding</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC&family=Ms+Madi&family=Cormorant+Garamond:wght@300;400&family=Lato:wght@100;400&family=Lora:ital@0;1&family=Montserrat:wght@300;400;500;600;700&family=Oswald&display=swap"
          rel="stylesheet"
        />

        <link href="
https://font-public.canva.com/YADpK5O5zHU/0/subsets/Shadow.7539c0876f1c28b6090ac809b53176071.f3a2cbc138c11d5b1b719ae9a33516f.woff2"/>
      </Head>

      <div className="hidden">

      <div className="absolute z-0 top-0 left-0 "
           style={{ transform: 'translate(-100px, -150px) rotate(150deg)' }}>
        <div style={{ transform: 'scaleX(1)' }} className="w-[250px] md:w-[300px]">
          <Image src={flower1} />
        </div>
      </div>

      <div className="absolute z-0 top-0 right-0"
           style={{ transform: 'translate(100px, 150px) rotate(-40deg)' }}>
        <div style={{ transform: 'scaleX(-1)' }} className="w-[250px] md:w-[300px]">
          <Image src={flower1} />
        </div>
      </div>

      <div className="absolute z-0 top-0 left-0"
           style={{ transform: 'translate(-100px, 150px) rotate(-240deg)' }}>
        <div style={{ transform: 'scaleX(1)' }} className="w-[325px] md:w-[400px]">
          <Image src={flower2} />
        </div>
      </div>

      </div>


      <div className="flex">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
