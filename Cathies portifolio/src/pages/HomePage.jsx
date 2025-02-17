

import { Link } from  "react-router-dom";
import imagesImage2 from "../images/image2.jpg";
import imagesProject1 from "../images/project1.jpg";
import imagesProject2 from "../images/project2.jpg";
import imagesProject3 from "../images/project3.jpg";
import imagesProject4 from "../images/project4.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";


function HomePage (){
    return(
        <>
        <div className="profile">

        <div className="intro">
        <p>Name: Nawagirwa Catherine < br/></p>
        <p>Profession: Frontend engineer  & <span> UX/UI designer</span> < br/> <span> crafting  seamless digital expriences.</span></p>

        <p>Location:Mengo ,Kampala,Uganda< br/></p>

        <p> Hobbies: Good music,Adventure, reading</p>
      </div>
<img src={imagesImage2} alt="images" className="image1" />

     
        </div>

        <Link to = "/projects" className="cta-button">View my work</Link>

        <div className="intro1">
          <div  className="intro1-pro">
          <div className="projects"> <h1>Project1</h1>
          <div>
          <img src={imagesProject1} alt="images" className="image" />
          </div>
          </div>
          <div className="projects"> <h1>Project2</h1>
          <div>
          <img src={imagesProject2} alt="images" className="image" />
          </div>
          </div>
          </div>
          
          <div  className="intro1-pro">
          <div className="projects"> <h1>Project3</h1>
          <div><img src={imagesProject3} alt="images" className="image" /></div>
          </div>
          <div className="projects"> <h1>Project4</h1>
          <div>
          <img src={imagesProject4} alt="images" className="image" />
          </div>
          </div>
          </div>

      </div>

      <div className="brief-intro">
       <h2>Below is a brief introduction about me</h2>

       <p>My name is Nawagirwa Catherine a passionate frontend developer. <br/>I develop eastically appealing website which are responsive and i make sure they bring comfort into every users day today life.<br/> Iam passionate about solving world challenging problems which 
       bring change into peoples lives. </p>
      </div>

      <div className="footer">
     contact: 0751172007
     watapp: +256751172007
     Email: cathynawagirwa@gmail.com
     Linkedin: Nawagirwa Catherine
</div>

<section className="projects">
    <h2>Featured Projects</h2>

    <div className= "project-grid">
        <div className="project">
            <h3>Restaurant Booking App</h3>
            <p>A modern restaurant websiten with an integrated booking system.</p>
            <Link to="projects" className="view-more">See More</Link>
        </div>

        <div className="project">
            image
            <h3>Portifolio Website</h3>
            <p>A sleek and responsive personal portifolio website built with React</p>
            <Link to = "/projects" className="">view-more</Link>
        </div>
    </div>
</section>

<section className="tech-stack">
<h2>Tech stack </h2>
<div className="icons">
    < FaHtml5 className ='icon'  title ="HTML5"/>
    < FaCss3Alt className= "icon" title = "CSS3"/>
    < FaJs className= "icon" title="JavaScript"/>
    < FaReact className= "icon" title ="React"/>
   < FaFigma className = "icon" title= "Figma"/>
</div>
</section>
        </>
    )
}

export default  HomePage;