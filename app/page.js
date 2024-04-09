import CardLinksHome from "@/components/CardLinksHome";
import CompanyValues from "@/components/CompanyValues";
import Cta from "@/components/Cta";
import HomeIntro from "@/components/HomeIntro";

export default function Home(props) {
  return (
    <div className="text-center lg:text-left md:px-8 xl:px-0">
      <HomeIntro />
      <CardLinksHome />
      <CompanyValues />
      <Cta />
    </div>
  )
}
