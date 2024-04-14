import Banner from "@/components/shared/Banner";
import CardLinks from "@/components/shared/CardLinks";
import CardsContainer from "@/components/shared/CardsContainer";
import Cta from "@/components/shared/Cta";

export const metadata = {
  title: 'Graphic Design',
};

const GraphicDesign = () => {
  const bannerData = {
    title: 'graphic design',
    content:'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    img:"/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
  }
  const cards = [
    {
        title: 'tim brown',
        content:"A book cover designed for Tim Brown’s new release, ‘Change’",
        img:'/assets/graphic-design/desktop/image-change.jpg'
    },
    {
        title: 'boxed water',
        content:'A simple packaging concept made for Boxed Water',
        img:'/assets/graphic-design/desktop/image-boxed-water.jpg'
    },
    {
        title: 'science',
        content:'A poster made in collaboration with the Federal Art Project',
        img:'/assets/graphic-design/desktop/image-science.jpg'
    }
  ]
  const links = [
    {
      title: "web design",
      imgSrc: "/image-web-design.jpg",
      link: "/web-design",
    },
    {
      title: "app design",
      imgSrc: "/image-app-design.jpg",
      link: "/app-design",
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
export default GraphicDesign