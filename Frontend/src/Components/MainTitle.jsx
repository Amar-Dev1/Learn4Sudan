import '../App.css';
const MainTitle = (props) => {
    return (

        <div className='main-title'>
            <h2 className='title-text'>{props.title}</h2>
            <span className='title-line'></span>
        </div>
    )
}

export default MainTitle;