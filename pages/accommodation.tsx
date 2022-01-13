export default function Accomodation() {
  const accommodation = [
    {
      image: "/tipi.png",
      title: "Camping, Coastal Stay",
      subtitle: "(complimentary)",
      description:
        "The campsite is reserved for wedding guests and is complimentary. There is also a bell tent with a double bed up for grabs for whoever is quickest.  ",
      price: "Free",
      contact: {
        phone: "01348 837822",
        link: "https://www.coastalstay.co.uk",
        address: "Coastal Stay, Noddfa Farm, Pembrokeshire, SA62 6DP",
        email: "info@coastalstay.co.uk",
      },
    },
    {
      image: "https://druidstone.co.uk/images/hotelfront.jpg",
      title: "Rooms at Druidstone",
      description:
        "There are various rooms in the main hotel sleeping between 2-7 people and ranging from £75 - £220 per night.",
      price: "£75 - £220 per night",
      contact: {
        phone: "01437 781221",
        link: "http://druidstone.co.uk",
        address: "The Druidstone, Haverfordwest, SA62 3NE",
        email: "enquiries@druidstone.co.uk",
      },
    },
    {
      image: "/accom.png",
      title: "Cottages at Druidstone",
      description:
        "The Dru also has several beautiful cottages on the property, sleeping between 2-8 people and ranging from £150 - £165 per night.",
      price: "£150 - £165 per night",
      contact: {
        phone: "01437 781221",
        link: "http://druidstone.co.uk",
        address: "The Druidstone, Haverfordwest, SA62 3NE",
        email: "enquiries@druidstone.co.uk",
      },
    },
  ];

  const taxis = [
    {
      name: "Frank's Cabs",
      phone: "07974 391522",
      // link: "https://stdavids-taxi.co.uk"
    },
    {
      name: "Morgan's Taxis",
      phone: "07788 292976",
      // link: "https://stdavidstaxis.wales"
    },
    {
      name: "Tony's Taxis",
      phone: "01437 720931",
    },
  ];

  return (
    <>
      <div className="pb-10 text-center justify-center">
        <h1 className="font-cormorant text-5xl">Accommodation</h1>
        <h2 className="font-cormorant text-lg mb-5">
          (please contact us for more details/to book)
        </h2>

        <div className="flex flex-col justify-center items-center mb-5">
          <img src={"/separator.png"} />
        </div>
      </div>

      <div className="py-10 grid gap-10 lg:gap-10 font-cormorant">
        {accommodation.map((accommodation, index) => (
          <div
            key={index}
            className="grid gap-0 md:gap-10 grid-cols-1 md:grid-cols-2 shadow-md rounded-md md:rounded-none overflow-hidden md:shadow-none"
          >
            <div className="flex items-start justify-end">
              <img src={accommodation.image} alt="coastal" className="w-full" />
            </div>

            <div className="text-left md:p-0 p-5">
              <h3 className="font-cormorant text-3xl">{accommodation.title}</h3>
              <h4 className="font-cormorant text-base">
                {accommodation.subtitle}
              </h4>

              <div>
                <p className="py-5 md:py-3 whitespace-pre-wrap text-lg">
                  {accommodation.description}
                </p>

                <div
                  className="grid gap-2 text-base items-center justify-center"
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
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <a href={accommodation.contact.link} target="_blank">
                    {accommodation.contact.link}
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>

                  <a href={`tel:${accommodation.contact.phone}`}>
                    {accommodation.contact.phone}
                  </a>

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
                    href={`http://maps.google.com/?q=${encodeURIComponent(
                      accommodation.contact.address
                    )}`}
                    target="_blank"
                  >
                    {accommodation.contact.address}
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <a
                    href={`mailto:${accommodation.contact.email}`}
                    target="_blank"
                  >
                    {accommodation.contact.email}
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div>{accommodation.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-10 text-center">
          <h1 className="font-cormorant text-4xl mb-5">Taxis</h1>

          <h2 className="font-cormorant text-xl mb-8">
          Druidstone is a 30 minute drive from Coastal Stay campsite. We advise booking taxis (numbers
below) for the Friday and/or Saturday closer to the time.
        </h2>

          <div className="flex flex-col justify-center items-center">
            <img src={"/separator.png"} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {taxis.map((taxi) => (
                <div key={taxi.name}>
                  <div className="font-cormorant text-2xl mb-2">
                    {taxi.name}
                  </div>
                  <div
                    className="grid gap-2 text-sm"
                    style={{ gridTemplateColumns: "auto 1fr" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>

                    <a href={`tel:${taxi.phone}`}>{taxi.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
