import Banner from "@/components/shared/Banner";
import CardLinks from "@/components/shared/CardLinks";
import CardsContainer from "@/components/shared/CardsContainer";
import Cta from "@/components/shared/Cta";

export const metadata = {
  title: 'App Design',
};

const AppDesign = () => {
  const bannerData = {
    title: 'app design',
    content:'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    img:"/assets/app-design/desktop/bg-pattern-intro-app.svg"
  }
  const cards = [
    {
        title: 'airfilter',
        content:'Solving the problem of poor indoor air quality by filtering the air',
        img:'/assets/app-design/desktop/image-airfilter.jpg'
    },
    {
        title: 'eyecam',
        content:'Product that lets you edit your favorite photos and videos at any time',
        img:'/assets/app-design/desktop/image-eyecam.jpg'
    },
    {
        title: 'faceit',
        content:'Get to meet your favorite internet superstar with the faceit app',
        img:'/assets/app-design/desktop/image-faceit.jpg'
    },
    {
        title: 'todo',
        content:'A todo app that features cloud sync with light and dark mode',
        img:'/assets/app-design/desktop/image-todo.jpg'
    },
    {
        title: 'loopstudios',
        content:'A VR experience app made for Loopstudios',
        img:'/assets/app-design/desktop/image-loopstudios.jpg'
    }
  ]
  const links = [
    {
      title: "web design",
      imgSrc: "/image-web-design.jpg",
      link: "/web-design",
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
export default AppDesign