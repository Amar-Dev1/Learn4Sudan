import './L4SNews.css';
import { FaCircle } from 'react-icons/fa';
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BlogCard = ({ slug, title, Image, category, date }) => {
    const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) : "No date available";

    return (
        <div className="blog-card">
            <Link to={`/L4SNews/${category}/${slug}`}>
                <div className="img-wrapper">
                    <img src={Image} alt={title} />
                </div>
                <div className="card-text">
                    <span className='cat'><FaCircle className='cat-icon' /> {category}</span>
                    <h3 className='title'>{title}</h3>
                    <small className='date'>{formattedDate}</small>
                    <span className='read-more'>اقرأ المزيد <FaCirclePlus /></span>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;