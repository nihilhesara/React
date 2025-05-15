import profilePic from "./assets/myimg.jpeg"

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Nihil Hesara</h2>
            <p className="card-text">Computer Science Undergraduate</p>
        </div>
    );
}

export default Card