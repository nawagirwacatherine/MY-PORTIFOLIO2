
import imagesImage2 from "../images/image2.jpg";
import imagesProject1 from "../images/project1.jpg";
import imagesProject2 from "../images/project2.jpg";
import imagesProject3 from "../images/project3.jpg";
import imagesProject4 from "../images/project4.jpg";


function HomePage (){
    return(
        <>
        <div className="profile">

        <div className="intro">
        <p>Name: Nawagirwa Catherine < br/></p>
        <p>Profession: Frontend engineer < br/></p>

        <p>Location:Mengo ,Kampala,Uganda< br/></p>

        <p> Hobbies: Good music,Adventure, reading</p>
      </div>
<img src={imagesImage2} alt="images" className="image1" />

     
        </div>

        <div className="intro2">
          <div>
          <div className="projects">Project1
          <img src={imagesProject1} alt="images" className="image" />
          </div>
          <div className="projects">Project2
          <img src={imagesProject2} alt="images" className="image" />
          </div>
          </div>
          
          <div>
          <div className="projects">Project3
          <img src={imagesProject3} alt="images" className="image" />
          </div>
          <div className="projects">Project4
          <img src={imagesProject4} alt="images" className="image" />
          </div>
          </div>

      </div>

      <div className="intro2">

      </div>
        </>
    )
}

export default  HomePage;