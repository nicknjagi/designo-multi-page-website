import CardLink from "./CardLink";

const CardLinks = ({links}) => {
  return (
    <section className="pt-24 px-4 md:px-0 flex flex-col lg:grid lg:grid-cols-2 gap-6">
      {links.map((card, index) => {
        const {title, imgSrc, link} = card
        return (
          <CardLink
            key={index}
            title={title}
            imgSrc={imgSrc}
            link={link}
          />
        )
      })}
    </section>
  )
};
export default CardLinks;
