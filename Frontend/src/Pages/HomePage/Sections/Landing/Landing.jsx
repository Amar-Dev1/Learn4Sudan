import { Container } from 'react-bootstrap';
import graphicLanding from '../../../../assets/graph01.png';
import { FaHandsHelping } from "react-icons/fa";

import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container className='landing' dir='rtl'>

      <div className="main-text">
        <h1>تعلم اليوم ، قد غداً</h1>
        <div className="links">
          <a href="#intro-volunteer"><button className='l4s-btn'><FaHandsHelping />  دعوة للتطوع</button></a>
        </div>
      </div>

      <div className="graphic-landing">
        <img src={graphicLanding} alt='graphic' />
      </div>

    </Container>


  )
}

export default Landing
