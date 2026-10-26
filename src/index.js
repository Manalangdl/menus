import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Reviews from "./pages/reviews/Reviews";
import TopPicks from "./pages/top-picks/TopPicks";
import Guide from "./pages/guide/Guide";
import About from "./pages/about/About";

const App = () => {
	return(
		<HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="top-picks" element={<TopPicks />} />
          <Route path="guide" element={<Guide />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
		</HashRouter>
	)
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <App />
	</React.StrictMode>
);
