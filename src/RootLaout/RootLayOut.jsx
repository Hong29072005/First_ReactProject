import { Outlet } from "react-router"
import TopNavbar from "../Components/TopNavbar"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const RootLayOut = () => {
  return (
    <div> 
        <TopNavbar/>
        <Navbar/>
        <main className="min-h-screen">
        <Outlet />
        </main>
        
        <Footer/>
    </div>
  )
}

export default RootLayOut