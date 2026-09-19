import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Favorite from './components/Favorite';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
 

  return (
 <div>

  <MovieProvider >
<NavBar/>

    <main className='main-content'>
      <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/favourite' element= "{<favorites/>}" />
      </Routes>
    </main>
    </MovieProvider>
    </div>
  )
}

export default App
