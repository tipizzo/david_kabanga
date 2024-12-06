import React from 'react'
import Hero from '../components/Hero'
import Stacks from '../components/Stacks'
import TopProjects from '../components/TopProjects'
import TopArticles from '../components/TopArticles'
import Contact from '../components/contact'
import SyntroGisInstructions from '../components/SyntroGisInstructions'

const Home = () => {
  return (
    <div>
        <Hero />
        <Stacks />
        <SyntroGisInstructions />
        <TopArticles />
        <Contact />
    </div>
  )
}

export default Home
