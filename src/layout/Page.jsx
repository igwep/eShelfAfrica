// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import { About } from '../Components/About';
import { HowitWorks } from '../Components/HowitWorks';
import { TopSellingBooks } from '../Components/TopSellingBooks';
import { Contact } from '../Components/Contact';
import { Footer } from '../Components/Footer';

const Page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <HowitWorks/>
        <TopSellingBooks/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Page