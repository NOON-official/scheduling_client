import React, { useState } from "react";
import TaskCard from "../molecules/TaskCard";
import InputCard from "../molecules/InputCard";
import "./style.css";

function Table(props) {
  const [state, setState] = useState(props.state);

  if (state == "CREATE") {
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
      <TaskCard content="content" detail="detial"/>
      <br />
      <TaskCard content="content" detail="detial"/>
      <br />
      <TaskCard content="content" detail="detial"/>
    </div>
  );
}

export default Table;
