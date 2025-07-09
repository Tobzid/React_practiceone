import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import Navbar from './components/navbar'
//import { PageLinks } from './components/data'
import Hero from './components/Hero'
import About from './components/about'
import Service from './components/ourservice'
import './App.css'
import Feature from './components/ourfeature'
import Footer from './components/footer'
import Navigation from './components/firstnavstop'

function App() {
  // const [count, setCount] = useState(0)
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
useEffect(()=>{
localStorage.setItem("current_theme", theme)
}, [theme])


  return (
    <>
    
    <header>
      <Navigation theme={theme} setTheme={setTheme}/>
{/* <Navbar/> */}
{/* <PageLinks/> */}
     </header>

     <div className={`hero ${theme}`}>
     <Hero/>
     </div>
     <div className={`aboutpage ${theme}`}>
     <About />
     </div>
     <div className={`services ${theme}`}>
     <Service/>
     </div>
     <div className={`tourCont ${theme}`}>
     <Feature/>
     </div>
    
    <Footer/>


     


      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
       */}
    </>
  )
}

export default App;
