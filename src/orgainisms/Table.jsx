import React, { useState } from 'react';
import TaskCard from '../molecules/TaskCard';
import InputCard from '../molecules/InputCard';
import './style.css';

function Table(props) {

 
  if (props.state == 'CREATE') {
    return (
      <div className="table">
        <h2 className="table-header">{props.state}</h2>
        <InputCard />
      </div>
    );
  }
 if (props.loading=="loading"){
   console.log("no item")
   return (
    <div className="table">
      <h2 className="table-header">{props.state}</h2>
      <p>loading</p>
    </div>
  );
 }
 else{
   
   return (
    <div className="table">
     
      <div className="table-header" >
         <h2 >{props.state}</h2>
      </div>
      {props.cards &&
        props.cards.map((card) => {
          console.log("id",card.id)
          return (
            <div>
              <TaskCard  id={card.id}content={card.content} detail={card.detial} />
              <br />
            </div>
          );
        })}
    </div>
  );
 }
  
}

export default Table;