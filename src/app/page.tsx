import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { OpenSource } from "@/components/OpenSource";
import { Philosophy } from "@/components/Philosophy";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        {/* <Philosophy /> */}
        {/* <OpenSource /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
