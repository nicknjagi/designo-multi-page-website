import Image from 'next/image'
import Link from 'next/link'
import { League_Spartan } from 'next/font/google'

export const spartan = League_Spartan({subsets: ['latin']})

const Logo = ({handleClick}) => {
  return (
    <Link href="/" onClick={handleClick} className="flex items-center gap-4">
      <Image src="/assets/Oval.svg" width={32} height={32} alt="logo" className='w-auto -ml-2'/>
      <span className={`text-2xl text-dark-grey font-bold tracking-[5px] pt-1 ${spartan.className} antialiased`}>DESIGNO</span>
    </Link>
  )
}
export default Logo