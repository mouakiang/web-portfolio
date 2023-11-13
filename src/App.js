import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
