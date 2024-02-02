import React from "react";
import Header from "../../components/Header/Header";
import RowList from "../../components/Rows/RowList/RowList"
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      {/* making empty fragment not to take the defaukt property of div */}
      <Header />
      <Banner />
      <RowList/>
      <Footer />
      
    </>
  );
};

export default Home;
