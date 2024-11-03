import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomePage, L4SNews, About, Volunteer, Header, Footer } from './index';
import { FaArrowUp } from 'react-icons/fa';
import BlogDetail from './Pages/News/BlogDetail';

// the main page title
export const pageTitle = ' منظمة تعلم من أجل السودان';
function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1000) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const moveScreen = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/L4SNews' element={<L4SNews />} />
        <Route path='/L4SNews/:id' element={<BlogDetail />} />
        <Route path='/L4SNews/:category/:id' element={<BlogDetail />} />
        <Route path='/About' element={<About />} />
        <Route path='/Volunteer' element={<Volunteer />} />
      </Routes>
      <Footer />
      {/* this is an arrow to move the screen to the top */}
      {showButton &&
        <button className="up-btn" onClick={moveScreen}>
          <FaArrowUp className='up-icon' />
        </button>
      }
    </BrowserRouter>

  )
}

export default App;