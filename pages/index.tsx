import Image from 'next/image';

function NavItem({ title }: { title: string }) {
  return (
    <a className="flex flex-col group cursor-pointer">
      <span>{title}</span>
      <span className="border-b border-none transition group-hover:border-black" />
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex-1 flex-col">

      <div className="z-1 fixed top-0 right-0 left-0 bg-main bg-opacity-75">
        <header className="container mx-auto max-w-[75%] flex items-center justify-between font-cormorant h-20">

          <div className="grid grid-flow-col gap-5">
            <NavItem title="HOME" />
            <NavItem title="DAY" />
          </div>

          <div className="text-3xl flex items-center">
            <span>J</span>
            <span className="text-base">&</span>
            <span>M</span>
          </div>

          <div className="grid grid-flow-col gap-5">
            <NavItem title="VENUE" />
            <NavItem title="RSVP" />
          </div>

        </header>
      </div>

      <div className="flex-1 py-10 text-center">
        <div className="flex justify-center items-center min-h-[50vh]">

          <div className="flex flex-col font-cormorant">
            <div className="italic">The Wedding of</div>

            <h1 className="font-cormorant text-5xl">
              <span>Jon </span>
              <span className="text-xl">&</span>
              <span> Molly</span>

            </h1>
          </div>

        </div>

        <div className="flex items-center justify-center min-h-[50vh]">
          <img src={"/separator.png"} />
        </div>

        <div className="container mx-auto max-w-[75%] font-cormorant">
          <div className="text-4xl pb-10">The Day</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ornare magna. Vivamus sollicitudin
            justo quis lorem finibus pharetra. Nunc malesuada interdum mi, vitae interdum lacus pulvinar quis. Aenean
            semper purus eleifend arcu vestibulum, ut finibus leo tempor. Cras lorem magna, rutrum id lorem ut, maximus
            ultrices lectus. Sed hendrerit eros non neque malesuada, et molestie libero ornare. Nullam in mauris ut nibh
            placerat egestas. Nullam mi nulla, condimentum in fermentum vitae, venenatis non odio. Proin at orci at
            dolor accumsan mollis at id lectus. Nunc blandit felis leo, ac euismod metus varius vitae. In aliquet nunc
            quis massa finibus, id pretium sapien vehicula. Sed semper ante vel nisl feugiat ullamcorper. Sed vulputate
            a mi non condimentum. Phasellus feugiat arcu vitae sodales sollicitudin. Mauris facilisis purus quis
            hendrerit feugiat. In eleifend nisl eu massa placerat mollis.
          </div>

          <div className="flex items-center justify-center min-h-[50vh]">
            <img src={"/separator.png"} />
          </div>
        </div>


        <div className="container mx-auto max-w-[75%] font-cormorant">
          <div className="text-4xl pb-10">The Venue</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ornare magna. Vivamus sollicitudin
            justo quis lorem finibus pharetra. Nunc malesuada interdum mi, vitae interdum lacus pulvinar quis. Aenean
            semper purus eleifend arcu vestibulum, ut finibus leo tempor. Cras lorem magna, rutrum id lorem ut, maximus
            ultrices lectus. Sed hendrerit eros non neque malesuada, et molestie libero ornare. Nullam in mauris ut nibh
            placerat egestas. Nullam mi nulla, condimentum in fermentum vitae, venenatis non odio. Proin at orci at
            dolor accumsan mollis at id lectus. Nunc blandit felis leo, ac euismod metus varius vitae. In aliquet nunc
            quis massa finibus, id pretium sapien vehicula. Sed semper ante vel nisl feugiat ullamcorper. Sed vulputate
            a mi non condimentum. Phasellus feugiat arcu vitae sodales sollicitudin. Mauris facilisis purus quis
            hendrerit feugiat. In eleifend nisl eu massa placerat mollis.
          </div>

          <div className="flex items-center justify-center min-h-[50vh]">
            <img src={"/separator.png"} />
          </div>
        </div>

        <div className="container mx-auto max-w-[50%] font-cormorant flex flex-col items-center justify-center">
          <div className="text-4xl pb-10">RSVP</div>
          <div className="pb-10">
            We'd love to see you at our wedding, please let us know if you can enjoy our day with us.
          </div>

          <div className="grid grid-cols-[100px_200px] gap-5">

            <label className="contents">
              <div>Your first name</div>
              <input className="" />
            </label>

            <label className="contents">
              <div>Your last name</div>
              <input className="" />
            </label>

            <div className="col-span-2 flex justify-center">
              <button className="flex-1 flex text-xl justify-center relative cursor-pointer">
                <span>Send</span>
                <span className="border-b border-black" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center min-h-[50vh]">
            <img src={"/separator.png"} />
          </div>
        </div>
      </div>

    </div>
  );


  // return (
  //   <div className="p-10 flex-1 flex">
  //     <div className="flex-1 grid grid-cols-10 min-h-[90vh] bg-yellow-50">
  //       <div className="col-span-4 overflow-hidden relative  min-h-full">
  //         {/*<Image src="https://images.unsplash.com/photo-1595187886119-2da48485ce39" layout="fill" objectFit="cover" />*/}
  //         <Image src="https://images.unsplash.com/photo-1608243027404-bf342660e791" layout="fill" objectFit="cover" />
  //         {/*<Image src={castleImage} layout="fill" objectFit="cover" />*/}
  //       </div>
  //
  //       <div className="col-span-6 px-16 py-10">
  //
  //         <h1 className="font-cormorant text-5xl">
  //          JON & MOLLY'S WEDDING
  //         </h1>
  //
  //       </div>
  //     </div>
  //   </div>
  // );
}
