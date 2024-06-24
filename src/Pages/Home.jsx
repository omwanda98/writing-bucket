import React from "react";
import Hero from "../Components/Hero/Hero";
import Homeservice from "../Components/Homeservice/Homeservice";
import Expertshome from "../Components/Expertshome/Expertshome";

const Home = () =>{
    return(
        <div>
            <Hero/>
            <Homeservice/>
            <Expertshome/>
        </div>
    )
}

export default Home