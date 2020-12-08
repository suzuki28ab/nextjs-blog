import { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'

const AppBar = (): JSX.Element => {
  const [toggleClass, setToggleClass] = useState(false)
  return (
    <>
      <Header setToggleClass={setToggleClass} toggleClass={toggleClass} />
      <SideBar toggle={toggleClass} />
      {toggleClass && (
        <div
          className="z-10 bg-gray-800 absolute top-0 left-0 h-full w-full opacity-50"
          onClick={() => setToggleClass(!toggleClass)}
        ></div>
      )}
    </>
  )
}

export default AppBar
