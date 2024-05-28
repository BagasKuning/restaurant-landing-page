import "./App.css"
import Navbar from "./component/Navbar.jsx"
import Hero from "./component/home-page/Hero"
import Service from "./component/home-page/Service.jsx"

export default function App() {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <Navbar/>
      <Hero/>
      <Service/>
      <div className="h-[700px] bg-slate-300"/>
    </div>
  )
}