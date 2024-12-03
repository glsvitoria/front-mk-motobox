import AboutUs from "@/pages/Home/AboutUs";
import Brands from "@/pages/Home/Brands";
import CallToAction from "@/pages/Home/CallToAction";
import Categories from "@/pages/Home/Categories";
import Equipments from "@/pages/Home/Equipments";
import Hero from "@/pages/Home/Hero";
import Partnerships from "@/pages/Home/Partnerships";

export default function Home() {
  return (
    <main className="w-[calc(100vw - 8px)] flex flex-col items-center overflow-hidden">
      <Hero />
      <Categories />
      {/* <MotorsSale /> */}
      <Equipments />
      <CallToAction />
      <AboutUs />
      <Partnerships />
      <Brands />
    </main>
  );
}
