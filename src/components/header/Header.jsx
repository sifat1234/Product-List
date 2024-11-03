import FreeDeliveryBanner from "./FreeDeliveryBanner"
import NavBar from "./NavBar"
import HeroSection from "./HeroSection"

export default function Header(){

    return (
        <>
         <header className="relative bg-white">
      <FreeDeliveryBanner />
  <NavBar/>
     
      </header>


      <HeroSection/>
        </>
       


    );
}