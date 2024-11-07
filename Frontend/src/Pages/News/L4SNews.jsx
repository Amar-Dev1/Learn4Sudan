import MainTitle from '../../Components/MainTitle';
import './L4SNews.css';
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from './BlogCard';
import { useState } from 'react';

const L4SNews = ({ blogs }) => {
  // Use a state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // Extract unique categories from blogs
  const categories = [...new Set(blogs.flatMap(blog => blog.categories.map(cat => cat.title)))];

  // Handle category button click
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'الكل'
    ? blogs
    : blogs.filter(blog => blog.categories.some(cat => cat.title === selectedCategory));

  return (
    <Container id='l4s-news' dir='rtl'>
      <MainTitle title="الأنشطة و الأخبار" />

      <Row className='mb-5 d-flex justify-content-center'>
        {/* Render category buttons */}
        {['الكل', ...categories].map((cat) => (
          <Col key={cat} lg={2} sm={12} md={4} className='d-flex justify-content-center align-items-center mb-4'>
            <button
              className={`${selectedCategory === cat ? 'active' : 'cat-btns'}`}
              onClick={() => handleCategory(cat)}>{cat}</button>
          </Col>
        ))}
      </Row>
      <Row className='d-flex justify-content-center'>
        {/* Render filtered blogs */}
        {filteredBlogs.map(blog => (
          <Col key={blog._id} sm={12} md={6} lg={4} className='mb-4'>
            <BlogCard
              slug={blog.slug.current}
              title={blog.title}
              Image={blog.mainImage?.asset?.url}
              category={blog.categories[0]?.title}
              date={blog.publishedAt}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default L4SNews;