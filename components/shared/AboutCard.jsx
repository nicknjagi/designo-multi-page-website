import Image from "next/image"

const AboutCard = ({title, content, img, alt, order}) => {
  return (
    <section className=" text-center lg:text-left max-w-[420px] md:max-w-[689px] lg:max-w-[1111px] lg:min-h-[640px] mx-auto overflow-hidden flex flex-col lg:flex-row sm:rounded-2xl">
        <div className={`relative lg:min-w-[476px] overflow-hidden z-20 order-${order}`}>
            <Image
              src={`/assets/about/mobile/${img}`}
              width={375}
              height={320}
              className='w-full md:hidden'
              alt={alt}
            />
            <Image
              src={`/assets/about/tablet/${img}`}
              width={639}
              height={320}
              className='w-full object-cover hidden md:block lg:hidden'
              alt={alt}
            />
            <Image
              src={`/assets/about/desktop/${img}`}
              width={476}
              height={480}
              className='w-full h-full object-cover object-center hidden lg:block'
              alt={alt}
            />
        </div>
        <div className="flex flex-col lg:justify-center gap-6 bg-light-peach px-6 md:px-[58px] py-20 md:py-16 relative z-20">
            <h1 className="text-[32px] text-peach-primary font-medium md:text-5xl z-20">{title}</h1>
            {content.map((el, index) => {
              return <p key={index}>{el}</p>
            })}
            <Image
                src="/assets/about/bg-pattern.svg"
                width={375}
                height={320}
                className='absolute top-14 left-14 scale-125' 
                alt=""
            />
        </div>
    </section>
  )
}
export default AboutCard