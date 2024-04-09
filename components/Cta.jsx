const Cta = () => {
  return (
    <section className="bg-peach-primary my-6 mx-4 md:mx-0 px-6 md:px-24 py-16 lg:py-[72px] text-center lg:text-start rounded-2xl lg:flex lg:items-center lg:justify-between relative z-10 -mb-10 translate-y-36 md:mb-0 md:translate-y-20 lg:translate-y-24">
      <div className="text-white mb-8">
        <h3 className="text-[32px] md:text-[40px] font-medium max-w-[280px] md:max-w-[320px] mx-auto lg:mx-0 mb-4 leading-10">Let’s talk about your project</h3>
        <p className="max-w-[430px] lg:max-w-[460px] mx-auto lg:mx-0">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <button className="btn-on-dark w-fit mx-auto lg:mx-0">GET IN TOUCH</button>
    </section>
  )
}
export default Cta