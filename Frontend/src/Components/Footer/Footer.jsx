import './Footer.css';
import { FaFacebook, FaLinkedin, FaTelegram, FaYoutube,FaEnvelope } from 'react-icons/fa6';
import { Container, Row, Col } from 'react-bootstrap';
import MainTitle from '../../Components/MainTitle';
import { useState } from 'react';

const Footer = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("يتم الإرسال ...")

    const formData = { name, email, message };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST', // Use POST method to send data
        headers: {
          'Content-Type': 'application/json', // Specify that we are sending JSON
        },
        body: JSON.stringify(formData), // Convert the form data to JSON
      });

      if (response.ok) {
        setStatus("تم الإرسال ✅")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("لم يتم الإرسال 💔 حاول مجدداً")
      }
    }

    catch {
      setStatus("حدث خطأ ! حاول مرة أخرى")
    }

    setTimeout(() => {
      setStatus('')
    }, 3000);

  }
  return (
    <Container fluid className='footer' id='contact' dir='rtl'>
      <MainTitle title='تواصل معنا' className="footer-title" />
      <Container>

        <Row>
          <Col xl={8} md={8} sm={12} >
            <form className='contact' onSubmit={handleSubmit}>
              <input type="text" placeholder='أسمك' required onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder='الإيميل الخاص بك' required onChange={(e) => setEmail(e.target.value)} />
              <textarea placeholder='أترك رسالتك' required onChange={(e) => setMessage(e.target.value)}></textarea>
              <button type='submit' className='l4s-btn'>إرسال</button>
              {status && <p className='sending-status'>{status}</p>}
            </form>
          </Col>

          <Col xl={4} md={4} sm={12}>
            <div className='social-media'>
              <h4>تابعنا على</h4>
              <a href="https://web.facebook.com/Learn4Sudan" className='face' target="blank"><FaFacebook className='icon' /></a>
              <a href="mailto:HR@Learn4Sudan.com" className='email' target="blank"><FaEnvelope className='icon' /></a>
              <a href="https://www.linkedin.com/company/learn-for-sudan" className='lnkdn' target="blank"><FaLinkedin className='icon' /></a>
              <a href="https://www.youtube.com/channel/UCPZa4wbTIP1DHb6zcz0GmxA" className='ytub' target="blank"><FaYoutube className='icon' /></a>
              <a href="https://t.me/L4schannel" className='tlgrm' target="blank"><FaTelegram className='icon' /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={12} md={12} sm={12}>
            <div className='copyrights'>
              <hr />
              <p>جميع حقوق الطبع و النشر محفوظة منظمة تعلم من أجل السودان&copy; 💙</p>
            </div>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}

export default Footer
