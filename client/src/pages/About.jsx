import Photo from "../components/Photo";
import "../styles/About.css"

function DownloadCV(){
    alert("Download started.");
}
export default function About(){
    return(
        <div className="about-page">
            <div className="about-left">
                <div className="about-heading">
                    <h1>Hi! I am Sambaran Banerjee</h1>
                    <h1></h1>
                </div>
                <div className="about-detail">
                    <h3>A Computer Science & Engineering student with 
                        a strong passion for building technology that solves real-world problems.
                        I specialize in full-stack development, with hands-on experience building web and mobile applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native.
                        I’m also proficient in C++, Java, and Python, with a growing interest in scalable system design and API integration.
                        Let’s connect — I’m always open to exciting collaborations and opportunities to grow!
                    </h3>
                </div>
                <div className="cv-buttons">
                    <a href="/Sambaran_Banerjee_Internship_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="btn-view">View CV</button>
                    </a>
                    <a href="/Sambaran_Banerjee_Internship_Resume.pdf" download onClick={() => alert("Your CV download will begin shortly.")}>
                        <button className="btn-download">Download CV</button>
                    </a>
                </div>
            </div>
            <div className="about-right">
                <Photo/>
            </div>
        </div>
    )

    
}