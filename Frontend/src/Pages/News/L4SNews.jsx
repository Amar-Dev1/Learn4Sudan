import { useEffect, useState } from 'react';
import MainTitle from '../../Components/MainTitle';
import './L4SNews.css'
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from './BlogCard';
import axios from 'axios';

const L4SNews = () => {

  // make useState for selected category
  const [selectedCat, setSelectedCat] = useState('الكل' || 'all');

  // make blogcards as an array hold the cards data fetched from server
  const [blogcards, setBlogcards] = useState([]);

  // a function handle the selected category
  const handleSelectedCategory = (category) => {
    setSelectedCat(category);
  }

  // an array hold the categories
  const categories = ['الكل', 'الأخبار', 'الأنشطة', 'المشاريع']

  // a function for fetching data from server
  const fetchBlogCardData = async () => {
    try {
      // fetch categories data
      const NewsData = await axios.get("http://localhost:3005/news");
      const porjectsData = await axios.get("http://localhost:3005/activities");
      const activitiesData = await axios.get("http://localhost:3005/projects");
      // combine the data in one array
      const combinedData = [...NewsData.data, ...porjectsData.data, ...activitiesData.data];
      // sort the data by date
      combinedData.sort((a, b) => new Date(b.date) - new Date(a.date));
      // set the sorted data to the blogcards
      setBlogcards(combinedData)
    }
    catch (error) {
      console.error("error !", error)
    }
  }

  // render the data once the page is rendered
  useEffect(() => {
    fetchBlogCardData()
  }, [])

  

  return (
    <Container id='l4s-news' dir='rtl'>
      <MainTitle title="الأنشطة و الأخبار" />
      {/* render the categories */}
      <Row className='d-flex justify-content-center'> {/* Add g-0 to remove gutters */}
        {
          categories.map((category) => {
            return (
              <Col className='d-flex justify-content-center mb-5' key={category}>
                <button
                  onClick={() => handleSelectedCategory(category)}
                  className={selectedCat === category ? "active" : "cat-btns"}
                >
                  {category}
                </button>
              </Col>
            )
          })
        }
      </Row>
      <Row className='d-flex justify-content-center mb-5 mt-5'>
        {
          // render the blog cards based on the selected category
          // here we assume that the blogCards are an array and filteredBlogCards are the filtered array based on the selected category
          selectedCat === 'الكل' ? blogcards.map((card) =>
            <Col xs={12} md={6} lg={4} className='d-flex justify-content-center align-items-center mb-5'>
              <BlogCard
                id={card.id}
                BlogImg={card.image}
                BlogTitle={card.title}
                BlogCategory={card.category}
                BlogDate={card.date}
              />
            </Col>
          ) : blogcards.filter((card) => card.category === selectedCat).map((card) =>
            <Col xs={12} md={6} lg={4} className='d-flex justify-content-center align-items-center mb-5'>
              <BlogCard
                id={card.id}
                BlogImg={card.image}
                BlogTitle={card.title}
                BlogCategory={card.category}
                BlogDate={card.date}
              />
            </Col>
          )
        }


      </Row>
    </Container>
  )
}

export default L4SNews;