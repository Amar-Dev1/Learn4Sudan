import { pageTitle } from '../../App'

import { Container } from 'react-bootstrap';
import { Landing, Partners } from '../../index';
import { VolunTypes, VolunApply } from '../Volunteer/Volunteer';
import '../../App.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    useEffect(() => {
        document.title = `الرئيسية - ${pageTitle}`
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <Container fluid className='main-container'>
                <Landing />
            </Container>
            <Partners />
            <div className="intro-volunteer" id='intro-volunteer' dir='rtl'>
                <VolunTypes />
                <VolunApply />
                <Link to={"/Volunteer"}><button className='l4s-btn'>! استكشف المزيد </button></Link>

                {/* I`m completely bad in naming variables 😂💔 */}

            </div>
        </>

    )
}

export default HomePage;