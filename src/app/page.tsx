
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
<>
<Navigation/>
<Hero/>
<Services/>
<Testimonials/>
<CTA/>
<Footer/>
</>
  );
}
