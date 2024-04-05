import CardLink from "../CardLink"

const CardLinksHome = () => {
    const links = [
      {
        title: 'web design',
        imgSrc: '/image-web-design.jpg',
        link: '/web-design',
      },
      {
        title: 'app design',
        imgSrc: '/image-app-design.jpg',
        link: '/app-design',
      },
      {
        title: 'graphic design',
        imgSrc: '/image-graphic-design.jpg',
        link: '/graphic-design',
      },
    ]
  
  return (
    <section className="grid gap-6 px-4 md:px-0 py-[120px]">
      <CardLink
        title={'web design'}
        imgSrc={'/image-web-design.jpg'}
        link={'/web-design'}
      />
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
    </section>
  )
}
export default CardLinksHome