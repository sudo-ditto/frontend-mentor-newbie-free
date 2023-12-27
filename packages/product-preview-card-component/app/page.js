import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="max-w-xs bg-white p-4 rounded-2xl">
        {/* Image */}
        <div className="relative group">
          <Image
            src="/images/image-qr-code.png"
            alt="equilibrium"
            width={302}
            height={302}
            className="rounded-lg hover:bg-cyan"
          />
        </div>
        {/* Content container */}
        <div className="mt-6 px-2 text-center">
          <h1 className="text-2xl font-extrabold">
            Improve your front-end skills by building projects
          </h1>
          <p className="my-5 text-base text-grayishBlue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  )
}
