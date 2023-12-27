import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="max-w-sm md:max-w-md bg-white p-6 rounded-xl border border-black shadow-card">
        {/* Image */}
        <div className="relative">
          <Image
            src="/images/illustration-article.svg"
            alt="equilibrium"
            width={279}
            height={200}
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        {/* Content container */}
        <div className="my-6">
          <div>
            <div className="inline-block rounded px-3 py-1 bg-yellow text-md text-black font-bold">
              Learning
            </div>

            <p className="text-sm mt-3">Published 21 Dec 2023</p>
          </div>

          <div className="flex flex-col gap-3 mt-3">
            <h1 className="text-xl font-bold hover:text-yellow hover:cursor-pointer duration-300 md:text-2xl">
              HTML & CSS foundations
            </h1>
            <p className="text-grey text-sm font-thin md:max-w-xs md:text-base">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>

        {/* Creator */}
        <div className="flex gap-4 items-center">
          <Image
            src="/images/image-avatar.webp"
            alt="Avatar"
            width={33}
            height={33}
          />
          <p className="font-bold">Greg Hooper</p>
        </div>
      </div>
    </main>
  )
}
