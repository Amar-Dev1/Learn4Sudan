import './Volunteer.css';

import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { MainTitle, VolunCard } from '../../index'
import VolunCardsData from './Volun_Cards_Data';

import { FaClock, FaTasks, FaWifi } from 'react-icons/fa';
import { pageTitle } from '../../App';

import GuideFile from '../../assets/l4s-volunteer-guide.pdf';
const Volunteer = () => {
  // making some logical things , nesassary to be in the page
  const volunPageTitle = 'فرص التطوع'
  useEffect(() => {
    window.scroll(0, 0)
    document.title = `${volunPageTitle} - ${pageTitle}`
  }, [])

  return (
    <Container fluid dir='rtl' id='volunteer'>

      <MainTitle title="تطوع معنا" />
      <VolunTypes />
      <VolunConditions />
      <VolunApply />
    </Container>
  )
}

export default Volunteer;

export const VolunTypes = () => {
  return (
    <Container id='volun-types' dir='rtl'>
      <h3 className='sm-title'>أنواع التطوع لدينا</h3>
      <Row justify-content-center>

        {
          VolunCardsData.map((card) =>
            <Col id={card.id} xs={12} md={4} lg={3} className='d-flex justify-content-center align-items-center'>
              <VolunCard {...card} />
            </Col>
          )
        }

      </Row>
    </Container>
  )
}

export const VolunConditions = () => {
  return (
    <Container id='volun-conditions'>
      <h3 className='sm-title'>شروط التطوع</h3>
      <ul>
        <li><FaWifi /> انترنت جيد</li>
        <li><FaClock /> التطوع فيما لايقل عن 20 ساعة أسبوعياً</li>
        <li><FaTasks /> الإلتزام بالمهام الموكله من مدير المشروع أو مدير المكتب</li>
      </ul>
      <a href={GuideFile} download={true}><button className='l4s-btn'>تحميل دليل المتطوع</button></a>

    </Container>
  )
}
export const VolunApply = () => {
  return (
    <Container id='volun-apply'>
      <MainTitle title="التقديم للتطوع" />
      <h3 className='soon-phrase'>قريباً ... 🔥</h3>
    </Container>
  )
}