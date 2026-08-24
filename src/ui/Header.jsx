import Logo from "../components/Logo/Logo";
import Navbar from "../components/navbar/navbar";


const Header =()=>{
  return(
    <header className="max-w-5xl mx-auto px-4 ">
      <section className="w-full flex items-center justify-between ">
      <Logo/>
      <Navbar/>
      </section>
    </header>
  )
}

export default Header