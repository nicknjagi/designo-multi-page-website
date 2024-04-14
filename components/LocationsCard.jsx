'use client'
import Image from "next/image"
import dynamic from "next/dynamic"
import { useMemo } from "react"

const LocationCard = ({country, phone, mail, office, street, address, data}) => {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        { 
          loading: () => <p className="flex items-center justify-center text-center h-full">Loading map</p>,
          ssr: false
        }
      ), [])
    

  return (
    <section id={country} className="flex flex-col lg:flex-row md:gap-6 lg:gap-[30px] lg:h-[326px]">
        <div className="overflow-hidden md:rounded-2xl w-full lg:max-w-[350px] h-[300px] lg:h-full">
            {/* <Image
                src={`/assets/locations/tablet/${img}`}
                width={689}
                height={326}
                className='w-full min-h-[320px] object-cover object-center hidden lg:hidden'
                alt={alt}
            />
            <Image
                src={`/assets/locations/desktop/${img}`}
                width={375}
                height={320}
                className='w-full h-full object-cover object-center hidden lg:block'
                alt={alt}
            /> */}
            <Map {...data}/>
        </div>
        <div className="relative bg-light-peach py-20 md:py-[88px] px-4 md:px-[72px] text-center md:text-left overflow-hidden md:rounded-2xl w-full">
            <h2 className="text-peach-primary text-[32px] md:text-[40px] font-medium mb-6 relative z-20">{country}</h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-36 lg:gap-24 xl:gap-36 relative z-20">
                <div>
                    <h4 className="font-bold">{office}</h4>
                    <p>{street}</p>
                    <p>{address}</p>
                </div>
                <div>
                    <h4 className="font-bold">Contact</h4>
                    <p>P : {phone}</p>
                    <p>M : {mail}</p>
                </div>
            </div>
            <Image
                src="/assets/bg-location-pattern.svg"
                width={375}
                height={320}
                className='absolute top-24 md:top-12 left-32 rotate-45 md:rotate-0 scale-[1.7]' 
                alt=""
            />
        </div>
    </section>
  )
}
export default LocationCard