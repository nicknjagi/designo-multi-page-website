'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CardLink = ({title, link, imgSrc}) => {
    const router = useRouter()

  return (
    <article
      onClick={() => router.push(link)}
      className="relative flex justify-center items-center h-[250px] md:h-[200px] lg:h-auto rounded-2xl after:content-[''] after:absolute after:h-full after:w-full after:hover:bg-peach-primary after:opacity-65 cursor-pointer after:rounded-2xl">
      <Image
        src={`/assets/home/mobile${imgSrc}`}
        width={327}
        height={250}
        className={`w-full h-full object-cover rounded-2xl brightness-50 absolute top-0 left-0 z-0 md:hidden`}
        alt={title}
        aria-hidden={true}
        priority
      />
      <Image
        src={`/assets/home/tablet${imgSrc}`}
        width={689}
        height={200}
        className={`w-full h-full object-cover rounded-2xl brightness-50 absolute top-0 left-0 z-0 hidden md:block lg:hidden`}
        alt={title}
        aria-hidden={true}
        priority
      />
      <Image
        src={`/assets/home/desktop${imgSrc}`}
        width={541}
        height={640}
        className={`w-full h-full object-cover rounded-2xl brightness-50 absolute top-0 left-0 z-0 hidden lg:block`}
        alt={title}
        aria-hidden={true}
        priority
      />
      <div className="text-white font-medium uppercase relative z-10">
        <h2 className="text-3xl md:text-[40px]">{title}</h2>
        <Link href={`${link}`} className="tracking-[5px] block mt-2">
          <div className="flex gap-2 items-center justify-center">
            <span>view projects</span>
            <Image
              src="/assets/chevron-forward.svg"
              width={14}
              height={14}
              className={`inline`}
              alt="icon"
              aria-hidden={true}
            />
          </div>
        </Link>
      </div>
    </article>
  )
}
export default CardLink