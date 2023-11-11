import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
