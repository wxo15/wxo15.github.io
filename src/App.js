import NavigationBar from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';
//import CareerTimeline from './components/career-timeline.js';
import CareerEdu from './components/careereducation.js';
import Portfolio from './components/portfolio.js';


function App() {
  return (
    <div className="App">
      <NavigationBar  />
      <Hero  />
      <About  />
      <CareerEdu />
      <Portfolio />
    </div>
  );
}

export default App;
