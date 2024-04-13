import AboutCardIntro from "@/components/AboutCardIntro"
import AboutCard from "@/components/shared/AboutCard"
import Cta from "@/components/shared/Cta"
import LocationCardsContainer from "@/components/shared/LocationCardsContainer"

const About = () => {
  const data = [
    {
      title:'World-class talent',
      content: ['We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.', 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'],
      img:"image-world-class-talent.jpg",
      alt:'a person looking at some photos',
      order:''
    },
    {
      title:'The real deal',
      content:['As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.','We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'],
      img:"image-real-deal.jpg",
      alt:'a person hanging a photo on a wall',
      order:'order-2'
    }
  ]
  return (
    <div className="md:px-8 xl:px-0">
      <AboutCardIntro />
      <div className="sm:mt-6 md:mt-[120px] lg:mt-40">
        <AboutCard {...data[0]}/>
      </div>
      <LocationCardsContainer />
      <div className="mb-24 md:mb-[120px] lg:mb-40">
        <AboutCard {...data[1]}/>
      </div>
      <Cta />
    </div>
  )
}
export default About