import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

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
