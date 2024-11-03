import './L4SNews.css';
import Img from '../../assets/education.jpg'
import { FaCircle } from 'react-icons/fa';
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return (
        <Link to={`/L4SNews/${props.BlogCategory}/${props.id}`} className='blog-card'>
            <div className="img-wrapper">
                <img src={Img} alt="BlogImg" />
            </div>
            <div className="card-text">
                <span className='cat'><FaCircle className='cat-icon' /> {props.BlogCategory}</span>
                <h3 className='title'>{props.BlogTitle}</h3>
                <small className='date'>{props.BlogDate}</small>
                <span className='read-more'>اقرأ المزيد <FaCirclePlus /></span>
            </div>
        </Link>
    )
}

export default BlogCard;