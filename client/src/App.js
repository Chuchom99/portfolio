import Navbar from "./component/navbar/Navbar";
import Banner from "./component/banner/Banner";
import Skills from "./component/skills/Skills";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="naba" >
      <Navbar className="fixed" />
      <Banner />
      <Skills />
      <Projects /> 
      <Contact/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
