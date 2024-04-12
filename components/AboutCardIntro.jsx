import Image from "next/image"

const AboutCardIntro = () => {
  return (
    <section className="text-white text-center lg:text-left max-w-[420px] md:max-w-[689px] lg:max-w-[1111px] mx-auto overflow-hidden lg:grid lg:grid-cols-2 sm:rounded-2xl">
        <div className="relative lg:order-1 overflow-hidden z-20">
            <Image
              src="/assets/about/mobile/image-about-hero.jpg"
              width={375}
              height={320}
              className='w-full md:hidden'
              alt="a group of people gathered around a desk"
            />
            <Image
              src="/assets/about/tablet/image-about-hero.jpg"
              width={639}
              height={320}
              className='w-full object-cover hidden md:block lg:hidden'
              alt="a group of people gathered around a desk"
            />
            <Image
              src="/assets/about/desktop/image-about-hero.jpg"
              width={476}
              height={480}
              className='w-full h-full object-cover object-center hidden lg:block'
              alt="a group of people gathered around a desk"
            />
        </div>
        <div className="bg-peach-primary px-6 md:px-[58px] py-20 md:py-16 relative lg:grid lg:content-center">
            <h1 className="text-[32px] font-medium md:text-5xl z-20 capitalize mb-6 md:mb-8">About Us</h1>
            <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            <Image
                src="/assets/Oval-bg.svg"
                width={375}
                height={320}
                className='absolute -top-[38%] md:-top-[70%] -right-[10%] md:right-[38%] -scale-[0.8] md:scale-125 md:rotate-45 lg:rotate[55deg] lg:top-12 lg:right-[20%] lg:scale-[1.75]' 
                alt=""
            />
        </div>
    </section>
  )
}
export default AboutCardIntro