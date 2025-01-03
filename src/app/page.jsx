import Hero from "./components/Hero";
import Grid from "./components/Grid";
import { FloatingNav } from "./components/ui/FloatingNavbar";

import { navItems } from "./data/index";
// import { RecentPost } from "./components/RecentPost";
import RecentPost from "./components/RecentPost";
import Experience from "./components/ui/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Clients from "./components/Clients";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid/>
      <RecentPost/>
      <Experience/>
      <Approach/>
      <Clients/>
      <Footer/>
    </main>
  );
}
