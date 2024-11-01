import { Link } from 'react-router-dom';
import './Volunteer.css';
const VolunCard = (props) => {
    return (
        <div className='card-body'>
            <img src={props.cardImg} alt={props.cardTitle} />
            <Link to={"/Volunteer"}><h3>{props.cardTitle}</h3></Link>
        </div>
    )
}

export default VolunCard;