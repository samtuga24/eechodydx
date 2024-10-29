import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import { AboutUs } from './component/AboutUs';
import { Nav } from './component/Nav';
import { Cards } from './component/Cards';
import { Choose } from './component/Choose';
import { Footer } from './component/Footer';
import { Contact } from './component/Contact';


function App() {

  return (
    <>
      <Nav />
      <Home />
      <Cards/>
      <Choose/>
      <AboutUs />
      <Contact/>
      <Footer/>
    </>
  );
}





export default App;
