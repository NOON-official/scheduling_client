import React, { useState } from 'react';
import TaskCard from '../molecules/TaskCard';
import InputCard from '../molecules/InputCard';
import './style.css';

function Table(props) {
  const [state, setState] = useState(props.state);
  console.log("Table props",props.loading);

  if (state == 'CREATE') {
    return (
      <div className="table">
        <h2 className="table-header">{state}</h2>
        <InputCard />
      </div>
    );
  }
 if (props.loading=="loading"){
   console.log("no item")
   return (
    <div className="table">
      <h2 className="table-header">{state}</h2>
      <p>loading</p>
    </div>
  );
 }
 else{
   console.log("item exist")
   return (
    <div className="table">
      <h2 className="table-header">{state}</h2>
      {props.cards &&
        props.cards.map((card) => {
          return (
            <div>
              <TaskCard content={card.content} detail={card.detial} />
              <br />
            </div>
          );
        })}
    </div>
  );
 }
  
}

export default Table;
