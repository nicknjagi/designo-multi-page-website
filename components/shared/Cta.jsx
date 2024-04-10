import Image from "next/image"

const Cta = () => {
  return (
    <section className="bg-peach-primary mx-4 md:mx-0 px-6 md:px-24 py-16 lg:py-[72px] text-center lg:text-start rounded-2xl lg:flex lg:items-center lg:justify-between relative z-30 translate-y-24 md:mb-0 md:translate-y-20 lg:translate-y-24 overflow-hidden">
      <Image
        src="/assets/shared/desktop/bg-pattern-call-to-action.svg"
        width={362}
        height={500}
        className='absolute top-1/2 -translate-y-1/2 -right-10 md:right-20 lg:right-[272px] scale-[2.5] -z-10'
        aria-hidden={true}
        alt="background pattern"
      />
      <div className="text-white mb-8">
        <h3 className="text-[32px] md:text-[40px] font-medium max-w-[280px] md:max-w-[320px] mx-auto lg:mx-0 mb-4 leading-10">Let’s talk about your project</h3>
        <p className="max-w-[430px] lg:max-w-[450px] mx-auto lg:mx-0">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <button className="btn-on-dark w-fit mx-auto lg:mx-0">GET IN TOUCH</button>
    </section>
  )
}
export default Cta