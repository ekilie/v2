import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Products from "@/components/products";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import {Philosophy} from "@/components/philosophy";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      {/* <Partners /> */}
      <Philosophy />
      {/* <Testimonials /> */}
      {/* <Stats /> */}
      <Products />
      <Faq />
      <Footer />
    </main>
  );
}
