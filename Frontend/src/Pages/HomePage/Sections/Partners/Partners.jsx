import './Partners.css';
import MainTitle from '../../../../Components/MainTitle';
import SYA from '../../../../assets/SYA.png';
import { Container, Row, Col } from 'react-bootstrap';
import ideaIcon from '../../../../assets/idea-icon.png';
const Partners = () => {

  return (
    <>
      <Container fluid className='partners-container' id='partners' dir='rtl'>
        <MainTitle title="شركاؤنا" />
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <img src={SYA} alt="sya Logo" className=" partner-logo" />
          </Col>
        </Row>
        <img src={ideaIcon} alt="" className='idea-icon' />
      </Container>
    </>
  )
}

export default Partners;