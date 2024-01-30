import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
const Home = () => {
  return (
    <>  
    {/* making empty fragment not to take the defaukt property of div */}
        <Header/>
        <Banner/>
        <Footer/>
    </>
  )
}

export default Home