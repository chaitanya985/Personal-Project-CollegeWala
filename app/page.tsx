import About from "@/components/shared/About";
import Colleges from "@/components/shared/Colleges";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Sponsors from "@/components/shared/Sponsors";
import { prisma } from "@/lib/prisma";

const Home = async () => {
  const colleges = await prisma.collegeList.findMany({});
  return (
    <>
      <Hero colleges={colleges}/>
      <Colleges />
      <Sponsors />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home