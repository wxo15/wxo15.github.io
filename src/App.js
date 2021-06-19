import logo from './logo.svg';
import NavigationBar from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js';
//import CareerTimeline from './components/career-timeline.js';
import CareerEdu from './components/careereducation.js';
import Portfolio from './components/portfolio.js';
//import './App.css';
import './components/header.js';

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

/*
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
*/