import "./App.css"
import Hero from "./component/home-page/Hero"
import Navbar from "./component/Navbar.jsx"

export default function App() {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <Navbar/>
      <Hero/>
    </div>
  )
}