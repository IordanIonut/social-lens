import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div class="bg-[#ffffff] pr-5 pl-5 md:pr-10 md:pl-10 flex flex-col gap-[15px] items-start justify-start h-[700px] relative overflow-hidden">
      <NavBar pageName={""}/>
      <Footer />
    </div>
  );
};

export default Home;
