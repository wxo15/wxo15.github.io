import NavigationBar from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';
//import CareerTimeline from './components/career-timeline.js';
import CareerEdu from './components/careereducation.js';
import Portfolio from './components/portfolio.js';
//import Badge from './components/badge.js';
import Cert from './components/certs.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <div className="ss-preload">
        <div id="preloader">
          <div id="loader"></div>
        </div>
      <NavigationBar  />
      <Hero  />
      <About  />
      <CareerEdu />
      <Portfolio />
      <Cert />
      <Footer />
      </div>
    </div>
  );
}

export default App;
