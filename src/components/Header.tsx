import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="bg-green h-14 px-2 flex justify-between">
      <div className="flex justify-center items-center w-11/12">
        <Link href="/">
          <a>
            <img src="/images/zukan.svg" alt="link to top" />
          </a>
        </Link>
      </div>
      <div className="lg:hidden relative w-5">
        <span className="absolute w-full h-1 bg-gray-600 top-4"></span>
        <span className="absolute w-full h-1 bg-gray-600 top-6"></span>
        <span className="absolute w-full h-1 bg-gray-600 top-8"></span>
      </div>
    </header>
  )
}

export default Header
