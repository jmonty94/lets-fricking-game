import {Outlet} from "react-router-dom"
import ResponsiveAppBar from "./NavBar"



const Layout = () => {
  return (
    <>
    <Outlet />
    {/* <Footer /> You can add a footer here */}
    </>
  )
}

export default Layout