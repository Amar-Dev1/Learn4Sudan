import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomePage, L4SNews, About, Volunteer, Header, Footer } from './index';
import { FaArrowUp } from 'react-icons/fa';
import BlogDetail from './Pages/News/BlogDetail';
import axios from 'axios';
// the main page title
export const pageTitle = ' منظمة تعلم من أجل السودان';
function App() {

  // set the languages
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

  // start fetching blogs api

  // blog === card 🤓
  const [Blogs, setBlogs] = useState([]);

  const projectId = import.meta.env.VITE_SANITY_PROJECTID;
  const dataset = import.meta.env.VITE_SANITY_DATASET;
  const apiUrl = `https://${projectId}.api.sanity.io/v2022-03-07/data/query/${dataset}`;


  const fetchBlogs = async () => {
    const query = `*[_type == "post"]{
      title,
    slug,
    author-> {
      name
    },
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    categories[]-> {
      title
    },
    publishedAt,
    body,
    }`;
    const encodedQuery = encodeURIComponent(query);
    const fullUrl = `${apiUrl}?query=${encodedQuery}`;

    try {
      const response = await axios.get(fullUrl);
      setBlogs(response.data.result);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // end fetching blogs api

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/L4SNews' element={<L4SNews blogs={Blogs} />} />
        <Route path='/L4SNews/:category/:slug' element={<BlogDetail blogs={Blogs} />} />
        <Route path='/Volunteer' element={<Volunteer />} />
        <Route path='/About' element={<About />} />
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