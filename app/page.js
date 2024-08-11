import About from "@/components/About";
import Appointments from "@/components/Appointments";
import Contactus from "@/components/Contactus";
import Customerreviews from "@/components/Customerreviews";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstagramReels from "@/components/InstagramReels";
import Mainsection from "@/components/Mainsection";
import Services from "@/components/Services";




export default function Home() {
  return (
    <div className="container mx-auto font-sans text-xl md:text-lg "  >

      <Header></Header>
      <Mainsection></Mainsection>
      <Appointments></Appointments>
      <InstagramReels></InstagramReels>
      <Services></Services>
      <About></About>
      <Customerreviews></Customerreviews>
      <Contactus></Contactus>
      <Footer></Footer>
      

    </div>
  );
}
