import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';



const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z- bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <div classname="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar /> 
        <Hero />
        </div>
        <About />
        <Experience /> 
        <Tech />
        <Works /> 
        <Feedbacks />
        <div className="relative z-0">             
          <Contact />
          <StarsCanvas />
        </div>  
    </div>
    </BrowserRouter>
  )
}

export default App
