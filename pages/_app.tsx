import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import opacity from "opacity";

import "tailwindcss/tailwind.css";
import "../styles/global.css";

opacity(new Date(2023, 0, 1), { days: 2 }, true);

function Header() {
  useEffect(() => {
  }, []);

  return (
    <div
      className="flex flex-col items-center relative bg-bottom bg-no-repeat bg-cover px-10 min-h-screen sm:min-h-0"
      style={{ backgroundImage: `url(/img_3.png)`, height: 600 }}
    >
      <div className="hidden text-center text-sm py-5 font-montserrat font-medium ">
        <span style={{ textTransform: "full-width" }}>
          IF YOU'RE READING THIS AND YOU'RE UNDER DURESS TO SPEAK TO AND/OR
          MARRY <i>DANIEL (THE USELESS CUNT) WILLIAMS</i> PLEASE CLICK THIS
          BUTTON 👉
        </span>
        <button
          className="bg-red-400 rounded-md px-3 py-1 text-base ml-3 uppercase"
          onClick={() =>
            alert(
              "Sorry help has not yet been implemented, please attempt to seek help another day"
            )
          }
        >
          😢 Help me
        </button>
      </div>

      <div className="hidden text-4xl font-lora grid grid-flow-col font-light">
        <div>Dan</div>
        <i className="text-black text-opacity-10 text-6xl">&</i>
        <div className="self-end">Hattie</div>
      </div>

      <div className="pt-10">
        <img
          className="opacity-50"
          src="https://fontmeme.com/permalink/211027/5dd84264fe337b75e0d52e0219200993.png"
          alt="handwriting-fonts"
        />

        <div className="text-right -mt-5">10. 09. 2022.</div>
      </div>

      <nav
        className="pt-10 grid text-center grid-flow-row md:grid-flow-col gap-5 justify-center items-center font-montserrat">
        <NavItem title="The weekend" link="/" />
        <Spacer />
        <NavItem title="Accommodation" link="/accommodation" />
        <Spacer />
        <NavItem title="RSVP" link="/rsvp" />
      </nav>
    </div>
  );
}

function NavItem({ title, link }) {
  return (
    <div className="uppercase font-medium text-lg tracking-wider text-black text-opacity-75">
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </div>
  );
}

function Spacer() {
  return (
    <div className="hidden md:block w-5 h-0.5 bg-gray-500 opacity-40 rounded-full" />
  );
}

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dan & Hattie. | Dattie</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Lato:wght@100;400&family=Lora:ital@0;1&family=Montserrat:wght@300;400;500;600;700&family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="overflow-hidden font-lora p-0 sm:p-6">
        <div>
          <Header />

          <div className="container mx-auto py-20 lg:px-40 px-6">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
