import Image from "next/image"
import Link from "next/link"

const LocationCard = ({country, img, bgRotate}) => {
  return (
    <article className="relative flex flex-col items-center ">
        <Image
          src="/assets/shared/desktop/bg-pattern-small-circle.svg"
          width={202}
          height={202}
          className={`absolute top-0 left-1/2 -translate-x-1/2 ${bgRotate}`}
          aria-hidden={true}
          alt=""
        />
        <Image
          src={`/assets/shared/desktop/${img}`}
          width={202}
          height={202}
          className=''
          alt={`${country} illustration`}
        />
        <h2 className="uppercase mt-12 mb-8">{country}</h2>
        <Link href={`/locations#${country}`} className="uppercase btn-on-light">see location</Link>
    </article>
  )
}
export default LocationCard