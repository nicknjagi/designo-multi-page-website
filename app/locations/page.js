import LocationCard from "@/components/LocationsCard"
import Cta from "@/components/shared/Cta"

export const metadata = {
  title: 'Locations',
};

const Locations = () => {
  const data = [
    {
      country:'Canada',
      office:'Designo Central Office',
      street:'3886 Wellington Street',
      address:'Toronto, Ontario M9C 3J5',
      phone : '+1 253-863-8967',
      mail : 'contact@designo.co',
      img:'image-map-canada.png',
      alt:'map of Canada',
      data: {
        position:[43.6445614556155, -79.57904099426062],
        zoom: 18
    }
    },
    {
      country:'australia',
      office:'Designo AU Office',
      street:'19 Balonne Street',
      address:'New South Wales 2443',
      phone : '(02) 6720 9092',
      mail : 'contact@designo.au',
      img:'image-map-australia.png',
      alt:'map of australia',
      data: {
        position:[-35.31507445474949, 149.13406680832904],
        zoom: 18
    }
    },
    {
      country:'United Kingdom',
      office:'Designo UK Office',
      street:'13  Colorado Way',
      address:'Rhyd-y-fro SA8 9GA',
      phone : '078 3115 1400',
      mail : 'contact@designo.uk',
      img:'image-map-uk.png',
      alt:'map of United Kingdom',
      data: {
        position:[51.73161777023627, -3.8617001931534767],
        zoom: 18
    }
    },
  ]
  return (
    <div className="md:px-8 xl:px-0">
      <div className="location flex flex-col mb-[120px] gap-10 md:gap-[120px] lg:gap-8">
        {data.map((location, index)=> {
          return <LocationCard key={index} {...location}/>
        })}
      </div>
      <Cta />
    </div>
  )
}
export default Locations