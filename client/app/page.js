'use client';
import FashionHero from "./components/banner";
import WardrobeSection from "./components/homecontact";
import JewelryShop from "./components/lookbook";
import Lookbook from "./components/products";
import SectionCard from "./components/section";

export default function Home() {

  return (
    <div>
      <FashionHero />
      <Lookbook />
      <JewelryShop />
      <SectionCard/>
      <WardrobeSection />
    </div>

  );
}
