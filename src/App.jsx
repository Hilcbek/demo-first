import React from 'react';
const Header = React.lazy(() => import('./components/Header.jsx'));
const NavBar = React.lazy(() => import('./components/NavBar.jsx'));
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
function App() {
  return (
    <div className="w-full h-full font-Poppins">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
