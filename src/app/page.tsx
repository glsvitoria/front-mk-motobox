import AboutUs from "@/pages/Home/AboutUs";
import Brands from "@/pages/Home/Brands";
import CallToAction from "@/pages/Home/CallToAction";
import Categories from "@/pages/Home/Categories";
import Equipments from "@/pages/Home/Equipments";
import Hero from "@/pages/Home/Hero";
import Partnerships from "@/pages/Home/Partnerships";
import LogoSchema from "@/utils/logoSchema";

export default function Home() {
  return (
    <>
      <LogoSchema />

      <main className="w-[calc(100vw - 8px)] flex flex-col items-center overflow-hidden">
        <Hero />
        <Categories />
        <Equipments />
        <CallToAction />
        <AboutUs />
        <Partnerships />
        <Brands />
      </main>
    </>
  );
}
