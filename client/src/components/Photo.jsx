import profilePic from "../Assets/profilePic.jpeg";
import "../styles/Photo.css"
export default function Photo(){
    return(
        <div className="photo-container">
            <img src={profilePic} alt="profile picture" className="profile-pic"/>
        </div>
    )
}