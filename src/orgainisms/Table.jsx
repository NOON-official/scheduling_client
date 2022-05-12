import React, { useState } from 'react';
import TaskCard from '../molecules/TaskCard';
import InputCard from '../molecules/InputCard';
import './style.css';

function Table(props) {
  const [state, setState] = useState(props.state);
  console.log(props);

  if (state == 'CREATE') {
    return (
      <div className="table">
        <h2 className="table-header">{state}</h2>
        <InputCard />
      </div>
    );
  }
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

export default Table;
