'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import SocialLinks from './SocialLinks'

const Header = () => {
  const pathname = usePathname()

  const linkClasses = (href: string) => {
    const isActive = pathname === href
    return `text-sm font-semibold transition hover:opacity-90 px-3 py-1 rounded-md py-2 ${
      isActive ? 'bg-white/20' : ''
    }`
  }

  return (
    <header className="bg-[#5626f3] text-white fixed top-0 w-full z-10 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-semibold hover:opacity-90 transition">
          <Image
            src="/logo.png"
            alt="Description of image"
            width={160}
            height={38}
            />
        </Link>
        <div className="menu flex gap-4">
          <Link href="/" className={linkClasses('/')}>
            Compare APIs
          </Link>
          <Link href="/forecast" className={linkClasses('/forecast')}>
            Weather Forecast
          </Link>
        </div>

        <SocialLinks />
      </nav>
    </header>
  )
}

export default Header