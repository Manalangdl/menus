import React from 'react'
import Layout from '../layout/Layout';

// NEED TO MAKE 
import Home from "../../pages/home/Home";
import Reviews from "../../pages/reviews/Reviews";
import TopPicks from "../../pages/top-picks/TopPicks";
import Guide from "../../pages/guide/Guide";
import About from "../../pages/about/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
 
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="top-picks" element={<TopPicks />} />
                <Route path="guide" element={<Guide />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
  
}

export default App