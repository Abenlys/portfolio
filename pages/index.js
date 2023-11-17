import ChooseYourPath from "@/components/ChooseYourPath/ChooseYourPath";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import { useColorContext } from "../hooks/Colorcontext";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import AboutDescrip from "@/components/AboutDescrip/AboutDescrip";
import Weather from "@/components/Weather/Weather";
import Skills from "@/components/Skills/Skills";
import Works from "@/components/Work/Works";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const { isJedi, setIsJedi } = useColorContext();
  return (
    <div className="general-wrapper">
      <div className="static width">
        <ChooseYourPath />
        <Navbar />
      </div>
      <div className={`home ${roboto.className}`}>
        <div className={`presentation-${isJedi ? "jedi" : "sith"}`}>
          <div className="home-text">
            <p>
              Welcome to the website of
              <br /> <span>TomRam</span> <br /> front-end developper
            </p>
            <br />
            <p>{`${
              isJedi
                ? "Jedi Knight & peace keeper"
                : "Sith Lord & Loving father"
            }`}</p>
          </div>
        </div>
        <Weather />
      </div>
      <SectionTitle value="about" id="about" />
      <AboutDescrip />
      <SectionTitle value="skills" id="skills" />
      <Skills />
      <SectionTitle value="works" id="work" />
      <Works />
      <SectionTitle value="contact" id="contact" />
      <Contact />
      <Footer />
    </div>
  );
}
