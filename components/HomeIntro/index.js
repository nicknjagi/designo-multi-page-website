import styles from './Home.module.css'
import Image from 'next/image'

const HomeIntro = () => {
  return (
    <section className="relative bg-peach-primary md:px-10 pt-20 md:pt-20 lg:py-10 md:rounded-2xl lg:flex overflow-hidden">
      <div className="flex flex-col justify-center gap-8 px-4 max-w-xl mx-auto relative z-20">
        <h1 className="text-3xl md:text-5xl text-white font-medium">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-white text-base max-w-[445px] mx-auto lg:mx-0">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="btn-on-dark w-fit mx-auto lg:mx-0">
          LEARN MORE
        </button>
      </div>
      <div className={styles.mobileFrameContainer}>
        <Image
          src="/assets/mobile-frame.svg"
          width={375}
          height={360}
          className={`${styles.mobileFrame} md:hidden`}
          alt="phone frame displaying an image of a vase"
          priority
        />
        <Image
          src="/assets/mobile-frame.svg"
          width={362}
          height={380}
          className={`${styles.mobileFrame} hidden md:block lg:hidden`}
          alt="phone frame displaying an image of a vase"
          priority
        />
        <Image
          src="/assets/mobile-frame.svg"
          width={362}
          height={500}
          className={`${styles.mobileFrame} hidden lg:block`}
          alt="phone frame displaying an image of a vase"
          priority
        />
      </div>
      <Image
        src="/assets/Oval-bg.svg"
        width={362}
        height={500}
        className={styles.ovalPattern}
        aria-hidden={true}
        alt="background pattern"
        priority
      />
    </section>
  )
}
export default HomeIntro
