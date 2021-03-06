import Image from 'next/image';
import flower1 from "../public/eucalyptus_1.png";
import flower2 from "../public/eucalyptus_2.png";
import React from "react";

function NavItem({ title }: { title: string }) {
  return (
    <a className="flex flex-col group cursor-pointer tracking-widest">
      <span>{title}</span>
      <span className="border-b border-none transition group-hover:border-black" />
    </a>
  )
}

export default function Home() {
  return (
    <div>

      <div className="w-full relative min-h-[100vh] flex items-center justify-center">

        <div className="absolute top-0 left-0"
             style={{ transform: 'translate(-10px, -00px) rotate(40deg)' }}>
          <div style={{ transform: 'scaleX(-1)' }} className="w-52 md:w-72">
            <Image src={flower1} />
          </div>
        </div>

        <div className="absolute top-0 left-0 hidden"
             style={{ transform: 'translate(-10px, -00px) rotate(40deg)' }}>
          <div style={{ transform: 'scaleX(-1)' }} className="w-52 md:w-72">
            <Image src={flower1} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0"
             style={{ transform: 'translate(-120px, 110px) rotate(70deg)' }}>
          <div style={{ transform: 'scaleX(-1)' }} className="w-96">
            <Image src={flower2} />
          </div>
        </div>

        <div className="absolute bottom-0 right-0"
             style={{ transform: 'translate(50px, 50px) rotate(-150deg)' }}>
          <div style={{ transform: 'scaleX(-1)' }} className="w-44 md:w-72">
            <Image src={flower1} />
          </div>
        </div>

        <div className="absolute top-0 right-0"
             style={{ transform: 'translate(100px, 70px) rotate(-50deg)' }}>
          <div style={{ transform: 'scaleX(1)' }} className="w-72 md:w-80">
            <Image src={flower2} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">

          <div className="flex flex-col justify-center items-center font-cormorant">
            <div className="italic tracking-wider mb-3">The Wedding of</div>

            <div className="font-cormorant items-end text-gray-100 text-6xl" style={{ color: '' }}>
              <span className="">Jon</span>
              <span className="text-xl font-playfair mx-3">&</span>
              <span className="">Molly</span>
            </div>

            <div className="mt-2">08 . 07 . 2023</div>

            <div className="font-madi text-3xl mt-3">xo</div>
          </div>

        </div>

      </div>


      <div className="flex-1 flex-col">

        <div className="z-1 fixed top-0 right-0 left-0 bg-main bg-opacity-75">
          <header className="mx-auto px-8 sm:px-0 sm:max-w-[75%] flex items-center justify-between font-cormorant h-20">

            <div className="grid grid-flow-col gap-5">
              {/*<NavItem title="HOME" />*/}
              <NavItem title="DAY" />
              <NavItem title="VENUE" />
            </div>

            <div className="text-3xl flex items-center">
              <span>J</span>
              <span className="text-base">&</span>
              <span>M</span>
            </div>

            <div className="grid grid-flow-col gap-5">
              <NavItem title="GIFT" />
              <NavItem title="RSVP" />
            </div>

          </header>
        </div>

        <div className="flex-1 py-10 text-center -mt-40">

          <div className="flex items-center justify-center mb-40">
            <img src={"/separator.png"} />
          </div>

          <div className="mx-auto px-8 sm:px-0 sm:max-w-[75%] font-cormorant">
            <h2 className="text-4xl pb-10">The Day</h2>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ornare magna. Vivamus sollicitudin
              justo quis lorem finibus pharetra. Nunc malesuada interdum mi, vitae interdum lacus pulvinar quis. Aenean
              semper purus eleifend arcu vestibulum, ut finibus leo tempor. Cras lorem magna, rutrum id lorem ut,
              maximus
              ultrices lectus. Sed hendrerit eros non neque malesuada, et molestie libero ornare. Nullam in mauris ut
              nibh
              placerat egestas. Nullam mi nulla, condimentum in fermentum vitae, venenatis non odio. Proin at orci at
              dolor accumsan mollis at id lectus. Nunc blandit felis leo, ac euismod metus varius vitae. In aliquet nunc
              quis massa finibus, id pretium sapien vehicula. Sed semper ante vel nisl feugiat ullamcorper. Sed
              vulputate
              a mi non condimentum. Phasellus feugiat arcu vitae sodales sollicitudin. Mauris facilisis purus quis
              hendrerit feugiat. In eleifend nisl eu massa placerat mollis.
            </div>

            <div className="flex items-center justify-center min-h-[50vh]">
              <img src={"/separator.png"} />
            </div>
          </div>


          <div className="mx-auto px-8 sm:px-0 sm:max-w-[75%] font-cormorant">
            <h2 className="text-4xl pb-10">The Venue</h2>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ornare magna. Vivamus sollicitudin
              justo quis lorem finibus pharetra. Nunc malesuada interdum mi, vitae interdum lacus pulvinar quis. Aenean
              semper purus eleifend arcu vestibulum, ut finibus leo tempor. Cras lorem magna, rutrum id lorem ut,
              maximus
              ultrices lectus. Sed hendrerit eros non neque malesuada, et molestie libero ornare. Nullam in mauris ut
              nibh
              placerat egestas. Nullam mi nulla, condimentum in fermentum vitae, venenatis non odio. Proin at orci at
              dolor accumsan mollis at id lectus. Nunc blandit felis leo, ac euismod metus varius vitae. In aliquet nunc
              quis massa finibus, id pretium sapien vehicula. Sed semper ante vel nisl feugiat ullamcorper. Sed
              vulputate
              a mi non condimentum. Phasellus feugiat arcu vitae sodales sollicitudin. Mauris facilisis purus quis
              hendrerit feugiat. In eleifend nisl eu massa placerat mollis.
            </div>

            <div className="flex items-center justify-center min-h-[50vh]">
              <img src={"/separator.png"} />
            </div>
          </div>

          <div className="mx-auto px-8 sm:px-0 sm:max-w-[75%] font-cormorant">
            <h2 className="text-4xl pb-10">Gifts</h2>
            <div className="">
              If you were thinking of getting us a gift <br />to help us on our way, <br />money towards our
              honeymoon <br />would really make our day!
            </div>

            <div className="flex items-center justify-center min-h-[50vh]">
              <img src={"/separator.png"} />
            </div>
          </div>

          <div className="mx-auto px-8 sm:px-0 sm:max-w-[75%] font-cormorant flex flex-col items-center justify-center">
            <h2 className="text-4xl pb-10">RSVP</h2>
            <div className="pb-10">
              We'd love to see you at our wedding, please let us know if you can enjoy our day with us.
            </div>

            <div className="grid grid-cols-[100px_200px] gap-3">

              <label className="contents">
                <div className="pt-1 justify-end">Your first name</div>
                <input className="p-1" />
              </label>

              <label className="contents">
                <div className="pt-1 justify-end">Your last name</div>
                <input className="p-1" />
              </label>

              <label className="contents">
                <div className="pt-1 justify-end">Your message</div>
                <textarea className="min-h-[100px] p-1" />
              </label>

              <div className="col-span-2 flex justify-center mt-2">
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
