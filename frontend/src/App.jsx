import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
