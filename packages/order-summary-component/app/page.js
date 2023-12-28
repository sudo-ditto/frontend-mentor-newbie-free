import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-backgroundMobile md:bg-backgroundDesktop bg-no-repeat bg-top">
      <div className="max-w-xs md:max-w-md bg-white rounded-3xl shadow-card">
        {/* Image */}
        <div>
          <Image
            src="/images/illustration-hero.svg"
            alt="Woman dancing to music "
            width={567}
            height={327}
            className="rounded-t-3xl"
          />
        </div>

        {/* Content container */}
        <div className="my-8 px-6 md:px-12">
          {/* Order Description */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl text-darkBlue font-extrabold">
              Order Summary
            </h1>
            <p className="my-4 md:my-6 text-sm md:text-base text-desaturatedBlue opacity-80 leading-6">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          {/* Order item */}
          <div className="flex justify-between items-center px-4 py-4 bg-veryPaleBlue rounded-xl">
            <div className="flex items-center justify-center gap-5">
              <Image
                src="/images/icon-music.svg"
                alt="Music icon"
                width={48}
                height={48}
              />

              <div>
                <p className="text-sm md:text-base font-bold">Annual Plan</p>
                <p className="text-xs md:text-sm text-desaturatedBlue">
                  $59.99/year
                </p>
              </div>
            </div>

            <a
              href="#"
              className="text-xs md:text-sm text-brightBlue font-semibold underline"
            >
              Change
            </a>
          </div>

          {/* Button container */}
          <div className="mt-8">
            <div className="flex items-center justify-center py-4 rounded-xl bg-brightBlue shadow-orderButton text-sm text-white font-bold">
              Proceed to Payment
            </div>

            <div className="flex items-center justify-center mt-3 py-4 text-sm  text-desaturatedBlue font-bold">
              Cancel Order
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
