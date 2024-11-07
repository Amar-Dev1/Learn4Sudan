import { Container, Row, Col } from 'react-bootstrap';
import './L4SNews.css';
import { useParams } from 'react-router-dom';
import { FaCalendarDays, FaNewspaper } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from "react-icons/io";
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
    const { slug } = useParams();
    const blogPost = blogs ? blogs.find(blog => blog.slug.current === slug) : null; // Ensure slug is accessed correctly

    if (!blogPost) {
        return <h1>Oops! Blog not found. ❌</h1>;
    }

    const imageUrl = blogPost.mainImage?.asset?.url;

    return (
        <Container id='blog-detail' dir='rtl'>
            <Link to={`/L4SNews/`}><button className='l4s-btn back-btn'><IoMdArrowRoundBack/></button></Link>
            <Row className='d-flex justify-content-center align-items-center mb-5 mt-5'>
                <Col lg={6} md={12} sm={12}>
                    <h2 className='blog-title'>{blogPost.title}</h2>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="blog-head">
                        {imageUrl && <img src={imageUrl} alt={blogPost.title} />}
                        <p className='blog-cat'><FaNewspaper /> {blogPost.categories?.map(cat => cat.title).join(', ')}</p>
                        <p className='blog-date'><FaCalendarDays /> {new Date(blogPost.publishedAt).toLocaleDateString()}</p>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center mt-5'>
                <Col lg={12} md={12} sm={12}>
                    <div className="blog-body">
                        <PortableText value={blogPost.body} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogDetail;