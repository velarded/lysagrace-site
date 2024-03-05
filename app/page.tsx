import Navbar from "./main/components/Navbar";

export default function Hero() {


  return (
      <section id="hero" className="flex flex-col desktop:flex-row gap-5rem desktop:gap-[10rem] justify-center items-center bg-iceblue h-hero-section">
        <div className="desktop:w-1/2 flex justify-center items-center">
          <div className="flex flex-col">
            <h1 className="font-messiri uppercase text-heroTitle desktop:text-heroTitleDesktop">Lysa</h1>
            <h1 className="font-messiri uppercase text-heroTitle desktop:text-heroTitleDesktop">Grace</h1>
            <div className="flex justify-around text-heroSubheading desktop:text-heroSubheadingDesktop uppercase w-full py-[1rem]">
              <span>Singer</span>
              <span>|</span>
              <span>Songwriter</span>
              <span>|</span>
              <span>Vocal Coach</span>
            </div>
          </div>
        </div>
        <div className="p-[1rem] bg-white w-4/5 desktop:w-[30rem]">
          <img className="w-full" src="../../headshotalyssa.jpeg"/>
        </div>
      </section>
  )
}