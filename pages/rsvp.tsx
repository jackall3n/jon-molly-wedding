export default function RSVP() {
  return (
    <>
      <div className="pb-10 text-center justify-center">
        <h1 className="font-cormorant mb-6 text-5xl">RSVP</h1>

        <h2 className="font-cormorant text-xl mb-10">
          <span>
             Numbers are tight so please let us know by January 31st if you can make the Friday evening and Saturday of our wedding weekend by emailing{' '}
          </span>
          <a className="underline" href="mailto:dattiewedding@gmail.com?subject=RSVP: Dan and Hattie wedding">dattiewedding@gmail.com</a>
        </h2>

        <div className="flex flex-col justify-center items-center mb-5">
          <img src={"/separator.png"} />
        </div>
      </div>

      <div className="py-10 grid gap-10 lg:gap-10 font-montserrat" />
    </>
  );
}
