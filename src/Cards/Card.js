import React from "react";
import "./card.css";
import photo from"../Data/photo_fitness.png"

const Card=({image,name,duration})=>{ 
      return( 
        <div className="cardbox">
        <img src={photo} alt = {name} /><br/>
        <h4 className="time">{duration}</h4>
          <b>{name}</b> 
        
        </div>
              

      )
}
export default Card;