import { Container, Row, Col } from 'react-bootstrap';
import './L4SNews.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

// for testing
import imgblog from '../../assets/education.jpg'

const BlogDetail = () => {

    // get the blog id from the URL
    const { id, category: urlCategory } = useParams();

    // make a state hold the blog post data
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null); // State to track errors

    // fetch the blog post data
    const fetchBlogPostData = async () => {
        try {
            const postData = await axios.get(`http://localhost:3020/posts/${id}`);
            setBlogPost(postData.data);
        } catch (err) {
            setError("Post not found"); // Set error message if fetch fails
        } finally {
            setLoading(false); // Set loading to false after fetch attempt
        }
    }

    useEffect(() => {
        fetchBlogPostData();
    }, [id]);

    // Handle loading and error states
    if (loading) return <h3>Loading...</h3>;
    if (error) return <div>{error}</div>;

    const { title, date, category, image, content } = blogPost;


    return (

        <Container id='blog-detail' dir='rtl'>
            {/* this row hold the image, category and date */}
            <Row className='d-flex justify-content-center align-items-center mt-5'>
                <Col lg={6} md={12} sm={12}>
                    <h2 className='blog-title'>{title}</h2>

                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="blog-head">
                        <img src={imgblog} alt={title} />
                        <p>{date}</p>
                        <p>{category}</p>
                    </div>
                </Col>
            </Row>
            {/* this hold the main title */}
            <Row>
                <div className="blog-content">{content}</div>
            </Row>



            <div className="blog-body"></div>
        </Container>

    )
}

export default BlogDetail;