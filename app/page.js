import About from "@/components/About";
import Appointments from "@/components/Appointments";
import Customerreviews from "@/components/Customerreviews";
import Header from "@/components/Header";
import Mainsection from "@/components/Mainsection";
import Services from "@/components/Services";




export default function Home() {
  return (
    <div className="container mx-auto font-sans text-xl md:text-lg "  >

      <Header></Header>
      <Mainsection></Mainsection>
      <Appointments></Appointments>
      <Services></Services>
      <Customerreviews></Customerreviews>
      <About></About>
      

    </div>
  );
}
