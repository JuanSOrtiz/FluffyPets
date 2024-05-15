import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Who from './components/Who'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <Content/>
      <Who/>
      <Footer/>
    </>
  )
}

export default App
