import LocationCardsContainer from "@/components/shared/LocationCardsContainer"
import Image from "next/image"

const Contact = () => {
  return (
    <div className="text-center md:text-left md:px-8 xl:px-0">
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 px-4 md:px-14 lg:px-16 xl:px-24 text-white py-[72px] lg:py-[54px] bg-peach-primary md:rounded-2xl relative overflow-hidden">
        <div className="md:max-w-[640px] lg:max-w-[540px] grid content-center">
            <h1 className="text-[32px] md:text-5xl font-medium capitalize mb-6 md:mb-8">Contact us</h1>
            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
          </div>
        <form className="flex flex-col gap-6 w-full lg:min-w-[380px] relative z-20">
          <input className="input" type="text" placeholder="Name"/>
          <input className="input" type="email" placeholder="Email Address"/>
          <input className="input" type="number" placeholder="Phone"/>
          <textarea className="input h-28 resize-none" name="" id="" placeholder="Your Message" ></textarea>
          <button className="px-12 py-4 bg-white hover:bg-peach-secondary hover:text-white rounded-lg uppercase text-black w-fit mx-auto md:mr-0 mt-4" type="submit">submit</button>
        </form>
        <Image
            src='/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg'
            width={400}
            height={400}
            className='absolute top-[37%] left-[45%] scale-[2.5] md:hidden' 
            aria-hidden={true}
            alt=""
        />
        <Image
            src='/assets/contact/desktop/bg-pattern-hero-desktop.svg'
            width={400}
            height={400}
            className='absolute top-0 -left-20 lg:left-24 lg:bottom-0 scale-[2] lg:scale-[1.65] hidden md:block' 
            aria-hidden={true}
            alt=""
        />
      </section>
      <LocationCardsContainer />
    </div>
  )
}
export default Contact