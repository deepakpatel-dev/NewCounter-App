import React from 'react';


function Card(props){
    //console.log(props);
    return (
        <div className="cards">
        <div className="card">
         <img src={props.imgsrc} alt="mypic" className="card__img"/>
             <div className="card__info">
                 <span className="card_category">{props.title} </span>
              <h3 className="card_title"> {props.sname} </h3>
              <a href="" target="">
        <button>Watch Now</button>
            </a>
           </div>
         </div>
      </div>
    )
    
}
export default Card;