import CardLink from "./shared/CardLink"

const HomeCardLinks = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-6 lg:gap-x-8 px-4 md:px-0 py-[120px] lg:py-40">
      <CardLink
        title={'web design'}
        imgSrc={'/image-web-design.jpg'}
        link={'/web-design'}
      />
      <div className="grid gap-6">
        <CardLink
          title={'app design'}
          imgSrc={'/image-app-design.jpg'}
          link={'/app-design'}
        />
        <CardLink
          title={'graphic design'}
          imgSrc={'/image-graphic-design.jpg'}
          link={'/graphic-design'}
        />
      </div>
    </section>
  )
}
export default HomeCardLinks