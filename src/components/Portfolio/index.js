import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "../../assets/github_icon.png";
import heroku from "../../assets/heroku_icon.png";


// Individual Cards 
function Cards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" width={75} src={github} alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img class="project-icon" width={75} src={heroku} alt="Live Application" /></a> 
       
             
             </p>
              <p class="description">
                {props.description}
                </p>
                <p class="topics">
                    ({props.topics})
                </p>
              
        </div>
      </div>
    );
}
  
  export default Cards;