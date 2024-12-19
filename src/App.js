import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

import AboutMe from './About_me';
import Main from './Main';
import Skills from './Skills';
import WhyHireMe from './WhyHireMe';
import Projects from './projects';
import ContactForm from './ContactForm';
function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate async data fetching or any async operation
    const fetchData = async () => {
      // Simulate delay for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading state to false after delay (simulating data loaded)
    };

    fetchData(); // Call fetchData function
  }, []);
  return (
    <div>
    {isLoading ? (
        <div className="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>

      </div>
    ) :(
    <div className="App">
      
      <Navbar/>
      <Main id="mainy" />
      <AboutMe id="aboutMey" />
      <WhyHireMe />
      <Skills id="skills" />
      <Projects id="project" />
      <ContactForm id="contact" />
    </div>
    )
  }
  </div>
  );
}

export default App;
