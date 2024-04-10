import CardLink from "./CardLink";

const WebCardLinks = () => {
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
    <section className="pt-24 px-4 md:px-0 flex flex-col lg:grid lg:grid-cols-2 gap-6">
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
};
export default WebCardLinks;
