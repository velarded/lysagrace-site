import Image from "next/image"
import SectionContainer from "../components/SectionContainer"
import Navbar from "../components/Navbar"

export default function About() {
    return (
      <>
      <SectionContainer name='About'>
          <div className="lg:w-1/2">
            <p className="pb-6 ">Lysa Grace (a.k.a Alyssa Datu), is a Filipino-Canadian singer/songwriter/vocal coach who is 
              influenced by soul, gospel, R&B, jazz, pop, and musical theatre. She began training for voice, acting, 
              and modelling at the age of 7 and began performing in Toronto at the age of 10. 
              Lysa Grace is also an alumna of the University of Toronto Jazz program.</p>

              <p className="pb-6">Throughout her thirteen years of performing in North America, she was given the opportunity to perform for numerous 
                Filipino/International artists such as Patti Austin, Sarah Geronimo, Martin Nievera, Sharon Cuneta, and many more. 
                Lysa Grace was also known for her accomplishments in competitions locally and internationally such as: CNE Rising Star Junior Grand Champion (2012), 
                2nd Runner Up at the International Modelling and Talent Association in New York City (2011), and a bronze and silver medalist at 
                the World Championships of Performing Arts in Los Angeles, California (2013). 
                She is most know for representing Toronto where she appeared under her previous name, Alyssa Datu on the television show, “The Voice Teens Philippines” in 2017. 
                She was a 4-chair turner, received a standing ovation, labelled “pitch perfect” by Ms. Lea Salonga, and was a part of Team Sharon.</p>

              <p className="pb-6">Lysa Grace has been recently working on recording new songs as an independent artist, publishing her first single entitled, “One” on all streaming platforms in 2022. 
                Alongside her career, she is a proud vocal coach to over twenty private students of diverse backgrounds. 
                With her versatility and diverse background she is qualified to train her students in classical, musical theatre, jazz, and pop. 
                Lysa Grace’s mantra as a coach is to use all aspects of one’s life, musical and non-musical, to tell a story and express the essence of emotion in a way that is unique and unreplicable.</p>
          </div>
      </SectionContainer>
      </>
    )
  }
  