import SectionContainer from "../components/SectionContainer"

export default function Media() {
    return (
      <SectionContainer name='Media'>

        <div className="relative">
          <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
          <div className="snap-center shrink-0">
            </div>
            <div className="snap-center shrink-0">
              <iframe className="z-10" width="1000" height="500" src="https://www.youtube.com/embed/abrAI1iwS0g" title="The Voice Teens Philippines Blind Audition: Alyssa Datu - Hanggang" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="snap-center shrink-0">
              <iframe width="1000" height="500" src="https://www.youtube.com/embed/4CizNYohkO4" title="Forever By Martin Nievera and Alyssa Grace | MAPLE MADNESS with Martin Nievera" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="snap-center shrink-0">
            <iframe width="1000" height="500" src="https://www.youtube.com/embed/2pGwnZYKxr4" title="Please Be Careful With My Heart Cover | Alyssa Grace Duet w/ Raymond Lauchengco" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="snap-center shrink-0">
              <iframe width="1000" height="500" src="https://www.youtube.com/embed/_jXiRGNLwL8" title="Ngayon At Kailanman By Alyssa Grace" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </SectionContainer>
    )
  }
  