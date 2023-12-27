import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="max-w-xs bg-darkBlue p-7 rounded-xl">
        {/* Image */}
        <div className="relative group">
          <Image
            src="/images/image-equilibrium.jpg"
            alt="equilibrium"
            width={302}
            height={302}
            className="rounded-lg hover:bg-cyan"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-cyan rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/icon-view.svg"
              alt="equilibrium"
              width={44}
              height={30}
            />
          </div>
        </div>
        {/* Content container */}
        <div className="mt-7">
          <p className="text-2xl font-bold">Equilibrium #3429</p>
          <p className="my-5 font-light text-softBlue">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        {/* Details */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/images/icon-ethereum.svg"
              alt="Ethereum"
              width={11}
              height={18}
            />
            <p className="text-cyan">0.041 ETH</p>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/images/icon-clock.svg"
              alt="Clock"
              width={16}
              height={16}
            />
            <p className="font-light text-softBlue">3 days left</p>
          </div>
        </div>
        <div className="w-full h-px my-4 bg-darkGrey"></div>
        {/* Creator */}
        <div className="flex gap-4 items-center">
          <Image
            src="/images/image-avatar.png"
            alt="Avatar"
            width={33}
            height={33}
            className="border border-white rounded-full"
          />
          <p className="text-sm tracking-wider">
            <span className="text-softBlue">Creation of</span> Jules Wyvern
          </p>
        </div>
      </div>
    </main>
  )
}
