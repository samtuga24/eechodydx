import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import { Nav } from './component/Nav';
import { Cards } from './component/Cards';
import { Choose } from './component/Choose';
import { Footer } from './component/Footer';
import { Contact } from './component/Contact';
import { ChooseCard } from './component/ChooseCard';
import { Unlimited } from './component/Unlimited';
import { Unlock } from './component/Unlock';
import { Bills } from './background/Bills';
import { Pay } from './component/Pay';

import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function App() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  // ScrollTrigger.create({
  //   trigger: '#part',
  //   pin: true,
  //   start:"top top",
  //   end:"+=300px",
  //   pinSpacing: false
  // })
  return (
    <>
      <Nav />
      <Home />
      <Cards/>
      <Choose/>
      <Bills />
      <Contact/>
      <Pay/>
      <Unlock/>
      <ChooseCard/>
      <Unlimited/>
      <Footer/>
    </>
  );
}





export default App;
