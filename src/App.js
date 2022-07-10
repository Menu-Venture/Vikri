/** @format */

import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route, Routes } from 'react-router-dom';
// import AppRoute from "./utils/AppRoute";
import ScrollReveal from './utils/ScrollReveal';
import ContactUs from './components/sections/ContactUs';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import DropdownMenu from './components/elements/DropdownMenu';

// Initialize Google Analytics
ReactGA.initialize('G-HV4P7G2B2S');

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview('/');
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    //trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Routes>
            <Route exact path='/' element={Home} layout={LayoutDefault} />
          </Routes>
        )}
      />
      <main>
        <LayoutDefault>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<ContactUs />} />
            <Route exact path='/drop' element={<DropdownMenu />} />
          </Routes>
        </LayoutDefault>
      </main>
    </>
  );
};

export default App;
