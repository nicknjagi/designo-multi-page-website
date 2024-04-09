import Image from "next/image"

const CompanyValues = () => {
  return (
    <section className="px-4 md:px-0 flex flex-col gap-20 md:gap-8  justify-center lg:flex-row lg:items-center">
      <article className="md:flex md:gap-12 lg:block mx-auto max-w-[350px] lg:max-w-[350px] md:max-w-max">
        <Image
          src="/assets/home/passionate.svg"
          width={202}
          height={202}
          aria-hidden={true}
          className="w-auto mx-auto"
          alt="illustration of a person working on a computer"
        />
        <div className="md:flex md:flex-col md:justify-center md:text-left lg:text-center lg:block">
          <h2 className="mt-12 mb-8 md:my-4 lg:mt-12 lg:mb-8 uppercase tracking-[5px] text-xl font-medium">
            passionate
          </h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </article>
      <article className="md:flex md:gap-12 lg:block mx-auto max-w-[350px] lg:max-w-[350px] md:max-w-max">
        <Image
          src="/assets/home/resourceful.svg"
          width={202}
          height={202}
          aria-hidden={true}
          className="w-auto mx-auto"
          alt="illustration of a person working on a computer"
        />
        <div className="md:flex md:flex-col md:justify-center md:text-left lg:text-center lg:block">
          <h2 className="mt-12 mb-8 md:my-4 lg:mt-12 lg:mb-8 uppercase tracking-[5px] text-xl font-medium">
            resourceful
          </h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </article>
      <article className="md:flex md:gap-12 lg:block mx-auto max-w-[350px] lg:max-w-[350px] md:max-w-max">
        <Image
          src="/assets/home/friendly.svg"
          width={202}
          height={202}
          aria-hidden={true}
          className="w-auto mx-auto"
          alt="illustration of a person working on a computer"
        />
        <div className="md:flex md:flex-col md:justify-center md:text-left lg:text-center lg:block">
          <h2 className="mt-12 mb-8 md:my-4 lg:mt-12 lg:mb-8 uppercase tracking-[5px] text-xl font-medium">
            friendly
          </h2>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </article>
    </section>
  )
}
export default CompanyValues