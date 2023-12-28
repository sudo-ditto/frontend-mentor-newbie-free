import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-screen md:h-auto md:w-100 md:grid md:grid-cols-2 bg-white md:rounded-4xl">
        {/* Result Score */}
        <div className="flex flex-col items-center justify-between text-center bg-gradient rounded-b-4xl md:rounded-4xl pt-6  pb-10 md:pb-8 px-12">
          <h2 className="text-lg text-paleBlue opacity-85 tracking-wide">
            Your Result
          </h2>

          <div className="flex flex-col items-center justify-center my-6 w-36 md:w-40 h-36 md:h-40 rounded-full bg-scoreGradient">
            <p className="mb-2 text-white text-6xl font-bold">76</p>
            <p className="text-sm text-paleBlue font-normal opacity-50">
              of 100
            </p>
          </div>

          <h3 className="mb-2 font-bold text-2xl text-white tracking-wide">
            Great
          </h3>
          <p className="font-thin text-base text-paleBlue opacity-70 tracking-wide">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>

        {/* Result Summary */}
        <div className="my-6 px-7 box-border">
          <h3 className="text-base md:text-lg font-bold">Summary</h3>

          {/* Reaction container */}
          <div className="flex flex-col gap-4 mt-4">
            {/* Reaction */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-2 bg-lightRed bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-reaction.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-lightRed font-bold">Reaction</p>
                </div>
                <div className="flex justify-between gap-3">
                  <p className="font-bold">
                    80 &nbsp;
                    <span className="opacity-60">/ 100</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Memory */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-2 bg-orangeyYellow bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-memory.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-orangeyYellow font-bold">
                    Memory
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  <p className="font-bold">
                    92 &nbsp;
                    <span className="opacity-60">/ 100</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Verbal */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-2 bg-greenTeal bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-verbal.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-greenTeal font-bold">Verbal</p>
                </div>
                <div className="flex justify-between gap-3">
                  <p className="font-bold">
                    61 &nbsp;
                    <span className="opacity-60">/ 100</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-2 bg-cobaltBlue bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-visual.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-cobaltBlue font-bold">Visual</p>
                </div>
                <div className="flex justify-between gap-3">
                  <p className="font-bold">
                    73 &nbsp;
                    <span className="opacity-60">/ 100</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ----- Reaction container end ----- */}

          <div className="flex items-center justify-center mt-6 rounded-3xl py-3 bg-darkGrayBlue text-white text-center hover:bg-buttonGradient hover:cursor-pointer">
            Continue
          </div>
        </div>
      </div>
    </main>
  )
}
