import profilePic from './assets/card.png';


function Card() {

    return(
        <div className="card">
            <img className='card-image' src= {profilePic} alt="" />
            <h2 className='card-title'>Software Developer </h2>
            <p className='card-text'>React Developer</p>
        </div>
    )
}


export default Card;