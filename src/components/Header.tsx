import Link from 'next/link'
import { useState } from 'react'
import SideBar from './SideBar'

const Header = (): JSX.Element => {
  const [toggleClass, setToggleClass] = useState(false)
  return (
    <>
      <header className="bg-customGreen h-14 px-2 flex justify-between">
        <div className="flex justify-center items-center w-11/12">
          <Link href="/">
            <a>
              <img src="/images/zukan.svg" alt="link to top" />
            </a>
          </Link>
        </div>
        <div className="lg:hidden relative w-6" onClick={() => setToggleClass(!toggleClass)}>
          <span className="absolute w-full h-1 bg-gray-600 top-4"></span>
          <span className="absolute w-full h-1 bg-gray-600 top-6"></span>
          <span className="absolute w-full h-1 bg-gray-600 top-8"></span>
        </div>
      </header>
      <SideBar toggle={toggleClass} />
    </>
  )
}

export default Header
