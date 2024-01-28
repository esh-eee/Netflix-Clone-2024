import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>  
    {/* making empty fragment not to take the defaukt property of div */}
        <Header/>
        <Footer/>
    </>
  )
}

export default Home