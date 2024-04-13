import Banner from "@/components/shared/Banner"
import Cta from "@/components/shared/Cta"
import CardLinks from "@/components/shared/CardLinks"
import CardsContainer from "@/components/shared/CardsContainer"

const WebDesign = () => {
  const bannerData = {
    title: 'web design',
    content:'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    img:"/assets/web-design/desktop/bg-pattern-intro-web.svg"
  }
  const cards = [
    {
        title: 'express',
        content:'A multi-carrier shipping website for ecommerce businesses',
        img:'/assets/web-design/desktop/image-express.jpg'
    },
    {
        title: 'transfer',
        content:'Site for low-cost money transfers and sending money within seconds',
        img:'/assets/web-design/desktop/image-transfer.jpg'
    },
    {
        title: 'photon',
        content:'A state-of-the-art music player with high-resolution audio and DSP effects',
        img:'/assets/web-design/desktop/image-photon.jpg'
    },
    {
        title: 'builder',
        content:'Connects users with local contractors based on their location',
        img:'/assets/web-design/desktop/image-builder.jpg'
    },
    {
        title: 'blogr',
        content:'Blogr is a platform for creating an online blog or publication',
        img:'/assets/web-design/desktop/image-blogr.jpg'
    },
    {
        title: 'camp',
        content:'Get expert training in coding, data, design, and digital marketing',
        img:'/assets/web-design/desktop/image-camp.jpg'
    },
  ]
  const links = [
    {
      title: "app design",
      imgSrc: "/image-app-design.jpg",
      link: "/app-design",
    },
    {
      title: "graphic design",
      imgSrc: "/image-graphic-design.jpg",
      link: "/graphic-design",
    },
  ];
  return (
    <div className="text-center md:px-8 xl:px-0">
      <Banner {...bannerData}/>
      <CardsContainer cardsData={cards}/>
      <CardLinks links={links}/>
      <Cta />
    </div>
  )
}
export default WebDesign