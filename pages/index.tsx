export default function Home() {
  const accommodation = [
    {
      image: "/pizza.png",
      title: "Pizza & Champagne Night",
      subtitle: "09/10/22 - Friday @ 7pm. Dress code: Smart casual",
      description:
        "We will be kicking off celebrations with a wood-fired pizza and champagne night with all wedding guests at Dan’s mum’s campsite (plus Katie Marshall brownies to finish off).",
      contact: {
        address: "Coastal Stay, Noddfa Farm, Pembrokeshire, SA62 6DP",
      },
    },
    {
      image: "/beach.png",
      title: "Wedding Day Swim",
      subtitle:
        "10/10/22 - Saturday @ 11am. Dress code: Warm jumpers & swim suits",
      description:
        "We would love for all guests to join us for a swim at Trellwyn beach. We will meet at the quay in Porthgain at 11am and, for those in need of wetsuits and/or surfboards, Hattie’s uncle Nick will be on hand with his Ma Sime’s Surf Hut van next to The Shed restaurant.",
      contact: {
        address: "The Shed, Porthgain, Haverfordwest, Pembrokeshire, SA62 5BL",
      },
    },
    {
      image: "/day_guests.png",
      title: "Wedding: Day Guests",
      subtitle: "10/10/22 - Saturday @ 3:30pm. Dress code: Cocktail attire",
      description:
        "Please join us at 3:30 pm at Druidstone Hotel for champagne, canapés and speeches followed by a classic Druidstone Feast. Please note: there will be no wedding ceremony as we will be doing this privately in the days before.",
      contact: {
        address: "The Druidstone, Haverfordwest, SA62 3NE",
      },
    },
    {
      image: "/evening.png",

      title: "Wedding: Evening Guests",
      subtitle: "10/10/22 - Saturday @ 7:00pm. Dress code: Cocktail attire",
      description:
        "Please join us at Druidstone from 7pm for drinks, dancing and live music provided by Jo and Dan Messore, plus a special Deckstepper’s reunion. A light evening buffet will be provided.",
      contact: {
        address: "The Druidstone, Haverfordwest, SA62 3NE",
      },
    },
  ];

  return (
    <>
      <div className="pb-10 text-center justify-center">
        <h1 className="font-cormorant mb-6 text-5xl">The Weekend</h1>

        <h2 className="font-cormorant text-xl mb-10">
          We're finally getting married! Our informal celebrations will take
          place over the weekend of September 10th, 2022.
        </h2>

        <div className="flex flex-col justify-center items-center mb-5">
          <img src={"/separator.png"} />
        </div>
      </div>

      <div className="py-10 grid gap-10 lg:gap-10 font-cormorant">
        {accommodation.map(({ image, subtitle, description, title, contact }, index) => (
          <div
            key={index}
            className="grid gap-0 md:gap-10 grid-cols-1 md:grid-cols-2 shadow-md rounded-md md:rounded-none overflow-hidden md:shadow-none"
          >
            <div className="flex items-start justify-end">
              <img src={image} alt="coastal" className="w-full" />
            </div>

            <div className="text-left md:p-0 p-5">
              <h3 className="font-cormorant text-3xl">{title}</h3>
              <h4 className="font-cormorant text-base">
                {subtitle}
              </h4>

              <div>
                <p className="py-5 md:py-3 text-lg whitespace-pre-wrap">
                  {description}
                </p>

                <div
                  className="grid gap-2 items-center justify-center"
                  style={{ gridTemplateColumns: "auto 1fr" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                    target="_blank"
                  >
                    {contact.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
