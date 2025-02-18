
import { Link } from  "react-router-dom";
// import imagesImage2 from "../images/image2.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma,} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";



function HomePage (){
    return(
        <>

        <Link to = "/projects" className="cta-button">View my work</Link>

<div  className= "project-grid">
<section className="projects">
    {/* <div className= "project-grid"> */}

    <h2>Featured Projects</h2>
        <div className="project">
            <h3>Restaurant Booking App</h3>
            <p>A modern restaurant websiten with an integrated booking system.</p>
            <Link to="projects" className="view-more">See More</Link>
        </div>

        <div className="project">
            <h3>Portifolio Website</h3>
            <p>A sleek and responsive personal portifolio website built with React</p>
            <Link to = "/projects" className="view-more">view-more</Link>
        </div>
    {/* </div> */}
</section>
</div>









      <div className="brief-intro">
       <h2>Below is a brief introduction about me</h2>

       <p>My name is Nawagirwa Catherine a passionate frontend developer. <br/>I develop eastically appealing website which are responsive and i make sure they bring comfort into every users day today life.<br/> Iam passionate about solving world challenging problems which 
       bring change into peoples lives. </p>
      </div>

      <div className="footer">
      <div className="contact"><span className="span1" ><TbPhoneCall /></span>contact: 0751172007</div>
      <div className="contact"><span className="span2" ><FaWhatsapp /></span>watapp: +256751172007 </div>
      <div className="contact"><span className="span3" > <MdOutlineMail /></span>Email: cathynawagirwa@gmail.com</div>
      <div className="contact"><span className="span4" > <FaLinkedin /></span>Linkedin: Nawagirwa Catherine</div>


<div className="tech-stack">
<h2>Tech stack </h2>
<div className="icons">
    <h1>Html</h1>
    < FaHtml5 className ='icon'  title ="HTML5"/>
    <h1>Css</h1>
    < FaCss3Alt className= "icon" title = "CSS3"/>
    <h1>JavaScript</h1>
    < FaJs className= "icon" title="JavaScript"/>
    <h1>React</h1>
    < FaReact className= "icon" title ="React"/>
    <h1>Figma</h1>
   < FaFigma className = "icon" title= "Figma"/>
</div>
</div>
</div>

        </>
    )
}

export default  HomePage;