import LocationCard from "./LocationCard"

const LocationCardsContainer = () => {
  const data = [
    {
      country:'canada',
      img:'illustration-canada.svg',
      bgRotate:'rotate-90'
    },
    {
      country:'australia',
      img:'illustration-australia.svg',
      bgRotate:''
    },
    {
      country:'United Kingdom',
      img:'illustration-united-kingdom.svg',
      bgRotate:'-rotate-90'
    },
    
  ]
  return (
    <section className="my-24 md:my-[120px] lg:my-40 px-4 lg:px-0 flex flex-col lg:flex-row gap-12 md:gap-20 lg:justify-evenly">
        {data.map((card, index) => {
          return <LocationCard key={index} {...card} />
        })}
    </section>
  )
}
export default LocationCardsContainer