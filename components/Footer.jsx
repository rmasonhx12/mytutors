
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/cello.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
    return ( 
        <footer className="bg-gray-200 py-4 mt-auto">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <div className="mb-4 md:mb-0">
          <Image
          src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-4">
            <li><Link href="/musicians">Musicians</Link></li>
            {/* TODO: terms */}
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; { currentYear } Jacqueline Taylor & Friends. All rights reserved.
          </p>
          <p className='text-sm text-gray-500 mt-2 md:mt-0'>Website by Bujisoft LLC.
            {/* TODO: add when website is opened <Link href="https://bujisoft.com">Bujisoft LLC</Link> */}
            </p>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;