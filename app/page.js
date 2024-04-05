import CardLink from "@/components/CardLink";
import CardLinksHome from "@/components/CardLinksHome";
import HomeIntro from "@/components/HomeIntro";

export default function Home(props) {
  return (
    <div className="text-center lg:text-left md:px-8 xl:px-0">
      <HomeIntro />
      <CardLinksHome />
    </div>
  )
}
