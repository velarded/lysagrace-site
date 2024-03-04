import Navbar from "./main/components/Navbar";

export default function Hero() {


  return (
    <div>
    {/* <Navbar isHero={true}/> */}
    <section id="hero" className="flex gap-[10rem] justify-center items-center bg-iceblue h-hero-section">
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex-col">
          <h1 className="font-messiri uppercase text-heroTitle">Lysa</h1>
          <h1 className="font-messiri uppercase text-heroTitle">Grace</h1>
          <div className="flex justify-around text-heroSubheading uppercase w-full py-[1rem]">
            <span>Singer</span>
            <span>|</span>
            <span>Songwriter</span>
            <span>|</span>
            <span>Vocal Coach</span>
          </div>
        </div>
      </div>
      <div className="p-[1rem] bg-white w-[30rem]">
        <img className="w-full" src="../../headshotalyssa.jpeg"/>
      </div>
    </section>
    </div>
  )
}