import "./App.css"
import Navbar from "./component/Navbar.jsx"
import Footer from "./component/Footer.jsx"
import Hero from "./component/home-page/Hero"
import Service from "./component/home-page/Service.jsx"
import Menu from "./component/home-page/Menu.jsx"
import Ratings from "./component/home-page/Ratings.jsx"
import Gallery from "./component/home-page/Gallery.jsx"

export default function App() {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <Navbar/>
      
      <Hero/>
      <Service/>
      <Menu/>
      <Ratings/>
      <Gallery/>
      
      <Footer/>
    </div>
)}