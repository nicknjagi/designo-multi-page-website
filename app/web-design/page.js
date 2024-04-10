import Banner from "@/components/Banner"
import Cta from "@/components/Cta"
import WebCardLinks from "@/components/WebCardLinks"
import WebCardsContainer from "@/components/WebCardsContainer"

const WebDesign = () => {
  const data = {
    title: 'web design',
    content:'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
  }
  return (
    <div className="text-center md:px-8 xl:px-0">
      <Banner {...data}/>
      <WebCardsContainer />
      <WebCardLinks />
      <Cta />
    </div>
  )
}
export default WebDesign