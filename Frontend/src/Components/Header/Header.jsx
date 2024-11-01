import './Header.css';
import L4sLogo from '../../assets/L4Slogo.png';

import { useRef } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {

  const navRef = useRef(null);
  const ShowNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <header className='Header'>
      <a href="/" className='l4s-logo'><img src={L4sLogo} alt="Learn4Sudan" /></a>
      <button className='bar-btn'><FaBars onClick={ShowNav} /></button>
      <nav className='navbar' ref={navRef} dir='rtl'>
        <button className='close-btn'><IoCloseSharp onClick={ShowNav} /></button>
        <Link onClick={ShowNav} to="/">الرئيسية</Link>
        <Link onClick={ShowNav} to="/About">نبذة عنا</Link>
        <Link onClick={ShowNav} to="/L4SNews">الأنشطة والأخبار</Link>
        <Link onClick={ShowNav} to="/Volunteer">فرص التطوع</Link>
        <a href="#contact" onClick={ShowNav}>تواصل معنا</a>
      </nav>
    </header>
  )
}

export default Header;