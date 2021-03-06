import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

const Header = ({
  setToggleClass,
  toggleClass,
}: {
  setToggleClass: Dispatch<SetStateAction<boolean>>
  toggleClass: boolean
}): JSX.Element => {
  return (
    <>
      <header className="bg-customGreen h-14 px-2 flex justify-between">
        <div className="flex justify-center items-center w-11/12">
          <Link href="/">
            <a>
              <img src="/images/zukan.svg" alt="link to top" width="352.5" height="17.45" />
            </a>
          </Link>
        </div>
        <div className="lg:hidden relative w-6" onClick={() => setToggleClass(!toggleClass)}>
          <span className="absolute w-full h-1 bg-gray-600 top-4"></span>
          <span className="absolute w-full h-1 bg-gray-600 top-6"></span>
          <span className="absolute w-full h-1 bg-gray-600 top-8"></span>
        </div>
      </header>
    </>
  )
}

export default Header
