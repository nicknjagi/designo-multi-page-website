import Image from 'next/image'
import Link from 'next/link'


const Logo = ({handleClick}) => {
  return (
    <Link href="/" onClick={handleClick} className="flex items-center gap-4">
      <Image src="/assets/shared/desktop/logo-dark.png" width={196} height={24} alt="logo" className='w-auto -ml-2'/>
    </Link>
  )
}
export default Logo