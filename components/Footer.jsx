import Link from 'next/link'
import Logo from './Logo'
import Image from 'next/image'

const Footer = () => {
  return ( 
    <footer className="bg-dark-bg text-center md:text-left px-4 md:px-8 pt-64 md:pt-40 lg:pt-44">
      <div class="max-w-[1111px] mx-auto">
        <div className='flex flex-col md:flex-row md:justify-between items-center md:border-b border-[#979797] border-opacity-20 md:pb-10 md:mb-8'>
          <Logo img={'light'} />
          <hr className='border w-full border-[#979797] opacity-20 my-8 md:hidden'/>
          <ul className='text-white text-sm flex flex-col md:flex-row gap-6 md:gap-10 mb-12 md:mb-0'>
            <li className='border-b border-transparent hover:border-b-white transition ease-in-out origin-left'>
              <Link href="/about">OUR COMPANY</Link>
            </li>
            <li className='border-b border-transparent hover:border-b-white transition ease-in-out origin-left'>
              <Link href="/locations">LOCATIONS</Link>
            </li>
            <li className='border-b border-transparent hover:border-b-white transition ease-in-out origin-left'>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className='md:flex md:pb-20'>
          <div className='text-darker-grey flex flex-col md:flex-row gap-12 md:gap-48'>
            <div className='flex flex-col gap-[2px]'>
              <h4 className='font-bold'>Designo Central Office</h4>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className='flex flex-col gap-[2px]'>
              <h4 className='font-bold'>Contact Us (Central Office)</h4>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
          <div className='flex justify-center gap-4 py-12 md:py-0 md:mt-auto md:ml-auto'>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                width={24}
                height={24}
                alt="facebook logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-youtube.svg"
                width={24}
                height={24}
                alt="youtube logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                width={24}
                height={24}
                alt="twitter logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-pinterest.svg"
                width={24}
                height={24}
                alt="pinterest logo"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                width={24}
                height={24}
                alt="instagram logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
