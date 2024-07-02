"use client"
import Image from 'next/image'
import Lottie from "lottie-react";
import hero from "./hero.json"
 
export default function HeroSection() {
return (
    <>
        <section id="home" className="relative pt-32 lg:pt-36">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
                </div>
                <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-gray-900 dark:text-white">
                        Impulsa Tu <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-purple-600 via-30% to-green-600">Presencia </span>
                        Online con Midscode.
                    </h1>
                    <p className="mt-8 text-gray-700 dark:text-gray-300">
                    Transformamos tus ideas en sitios web impresionantes y funcionales, creamos soluciones personalizadas que se adaptan a tus necesidades.
                    </p>
                    <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                        <div className="flex justify-center lg:justify-start">
  <button
    className="w-40 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
  >
    Empieza Ahora
  </button>
</div>


                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="flex-1 lg:w-1/2 relative flex justify-center lg:justify-end pr-8">
  <div className="rounded-lg absolute right-0 lg:right-0 bottom-10 w-11/12 h-2/5 bg-gradient-to-tr from-green-50 to-sky-100 dark:bg-gradient-to-tr dark:from-gray-950 dark:to-gray-700" style={{ zIndex: 1 }} />
  <Lottie
    animationData={hero}
    autoplay
    loop
    style={{ width: '100%', height: '100%', zIndex: 2 }}
    className="relative"
  />
</div>



            </div>
        </section>
    </>
)
}