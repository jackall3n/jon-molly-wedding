import Image from 'next/image';

function NavItem({ title }: { title: string }) {
  return (
    <a className="flex flex-col group cursor-pointer">
      <span>{title}</span>
      <span className="border-b border-transparent transition group-hover:border-black" />
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex-1 flex-col">
      <div className="container mx-auto max-w-[75%]">
        <header className="flex items-center justify-between font-cormorant h-20">

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
        <div className="flex justify-center items-center min-h-[450px]">

          <div className="flex flex-col font-cormorant">
            <div className="italic">The Wedding of</div>

            <h1 className="font-cormorant text-5xl">
              <span>Jon </span>
              <span className="text-xl">&</span>
              <span> Molly</span>

            </h1>
          </div>

        </div>

        <div className="col-span-4 overflow-hidden relative min-h-[80vh] max-w-[75%] mx-auto">
          {/*<Image src="https://images.unsplash.com/photo-1595187886119-2da48485ce39" layout="fill" objectFit="cover" />*/}
          <Image src="https://images.unsplash.com/photo-1608243027404-bf342660e791" layout="fill" objectFit="cover"
                 objectPosition="top" />
          {/*<Image src={castleImage} layout="fill" objectFit="cover" />*/}
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
