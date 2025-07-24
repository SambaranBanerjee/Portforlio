function DownloadCV(){

}
export default function About(){
    return(
        <>
            <div className="About">
                <div className="About-heading">
                    <h1>Hi! I am Sambaran Banerjee</h1>
                    <h1></h1>
                </div>
                <div className="About-detail">
                    <h3>A Computer Science & Engineering student with 
                        a strong passion for building technology that solves real-world problems.
                        I specialize in full-stack development, with hands-on experience building web and mobile applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native.
                         I’m also proficient in C++, Java, and Python, with a growing interest in scalable system design and API integration.
                         Let’s connect — I’m always open to exciting collaborations and opportunities to grow!
                    </h3>
                </div>
                <button onClick={DownloadCV}>
                    Download CV
                </button>
            </div>
            <div className="Picture">
                {/*Photo/*/}
            </div>
        </>
    )

    
}