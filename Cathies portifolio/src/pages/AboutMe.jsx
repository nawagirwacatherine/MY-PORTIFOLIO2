import "./AboutMe.css"
import imagesImage2 from "../images/image2.jpg";
// import resumePDF from "../documents/resume.pdf";

function AboutMe (){
    return(
      <>
        <div className="about-me">

        <div className= "about-hero">
            <img src={imagesImage2} alt="Profile" className="profile-img"/>

            <div className="about-text">
                <h1>About Me</h1>

                <p>
            Hi! Im <strong>[Your Name]</strong>, a passionate <strong>Frontend Developer</strong> and <strong>UX/UI Designer</strong>.  
            I love crafting clean, user-friendly web experiences that bridge the gap between design and functionality.
          </p>
            </div>
            <section className="journey">
                <h2>My Journey</h2>

                <p>
          I hold a <strong>Diploma in Computer Science</strong> and have completed a globally recognized frontend development certification.  
          Over the years, I’ve gained expertise in **React, JavaScript, HTML, CSS, and Figma**, allowing me to build dynamic web applications.
        </p>
            </section>

            <section className = "exprience">
                <h2>Professional Experience</h2>

                <p>
          I served as an **ICT Leader at Cleanongoel** for 3 years, where I empowered the community by teaching essential ICT skills.  
          My role involved developing interactive platforms, mentoring learners, and driving digital literacy programs.
        </p>
            </section>

            <section className= "hobbies">
              <h2>Hobbie $ Interests</h2>
              <p>When iam not coding I enjoy:</p>
              <ul>
                <li>Exploring new UX/UI design trends</li>
                <li>Contributing to open-source Projects</li>
                <li>Enjoying good music</li>
              </ul>
            </section>

            <section className="resume">
                <h2>Download My Resume</h2>
                {/* <a href={resumePDF} download="YourName_Resume.pdf" className="resume-button">
          Download Resume
        </a> */}
            </section>
        </div>

        </div>
        </>
    )
}

export default  AboutMe;