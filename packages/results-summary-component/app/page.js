import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-screen bg-white rounded-2xl">
        <div className="flex items-center justify-center text-center bg-gradient rounded-b-2xl"></div>
        <div className="px-7">
          <h3>Summary</h3>

          <div className="flex flex-col gap-3">
            {/* Reaction */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-1 bg-lightRed bg-opacity-5 text-sm">
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
                  80 <span>/ 10</span>
                </div>
              </div>
            </div>

            {/* Memory */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-1 bg-orangeyYellow bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-memory.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-orangeyYellow font-bold">
                    Reaction
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  80 <span>/ 10</span>
                </div>
              </div>
            </div>

            {/* Verbal */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-1 bg-greenTeal bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-verbal.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-greenTeal font-bold">
                    Reaction
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  80 <span>/ 10</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="flex flex-col gap-2 rounded-xl px-4 py-1 bg-cobaltBlue bg-opacity-5 text-sm">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/icon-visual.svg"
                    alt="Bolt"
                    width={16}
                    height={19}
                  />
                  <p className="flex gap-3 text-cobaltBlue font-bold">
                    Reaction
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  80 <span>/ 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
