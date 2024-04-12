import Image from "next/image"

const Banner = ({title, content, img}) => {
  return (
    <section className="flex flex-col gap-6 justify-center text-white relative bg-peach-primary min-h-[320px] md:min-h-[252px] overflow-hidden md:rounded-2xl">
        <h1 className="capitalize font-medium text-[32px] md:text-5xl  relative z-10">{title}</h1>
        <p className="relative z-10 max-w-sm mx-auto">{content}</p>
        <Image
            src="/assets/shared/desktop/bg-pattern-small-circle.svg"
            width={202}
            height={202}
            className='absolute top-1/2 -translate-y-1/2 -rotate-90 right-10 scale-[1.4] md:hidden'
            aria-hidden={true}
            alt=""
        />
        <Image
            src={img}
            width={202}
            height={202}
            className='absolute top-1/2 -translate-y-1/2 left-12 lg:left-32 min-h-full w-full hidden md:block' 
            aria-hidden={true}
            alt=""
        />
    </section>
  )
}
export default Banner