import Header from "./Header/index.jsx"
import { Outlet } from "react-router"
import Footer from"./Footer/index.jsx"

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout