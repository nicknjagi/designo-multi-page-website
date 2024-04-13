import Image from 'next/image'
import Link from 'next/link'


const Logo = ({img}) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src={`/assets/shared/desktop/logo-${img}.png`} width={196} height={24} alt="logo" className='w-auto'/>
    </Link>
  )
}
export default Logo