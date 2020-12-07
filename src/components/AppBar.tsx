import Header from './Header'
import SideBar from './SideBar'

const AppBar = (): JSX.Element => {
  return (
    <>
      <Header />
      <SideBar toggle={false} />
    </>
  )
}

export default AppBar
