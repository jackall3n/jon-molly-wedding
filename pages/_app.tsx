import React from "react";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/global.css";


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jon & Molly's Wedding</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Lato:wght@100;400&family=Lora:ital@0;1&family=Montserrat:wght@300;400;500;600;700&family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
