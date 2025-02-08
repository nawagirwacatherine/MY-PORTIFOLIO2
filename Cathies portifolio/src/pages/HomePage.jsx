
import imagesImage2 from "../images/image2.jpg";

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
          <div className="projects">Project1</div>
          <div className="projects">Project2</div>
          </div>
          
          <div>
          <div className="projects">Project3</div>
          <div className="projects">Project4</div>
          </div>

      </div>

      <div className="intro2">

      </div>
        </>
    )
}

export default  HomePage;