import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from "axios";
import Typography from '@mui/material/Typography';

function StateUpdate(props){
  console.log("current",typeof(props.current))
  const [currentState, setCurrentState]= useState(props.current);
  const [newState, setNewState]=useState(currentState);
  
  const stateHandler = (e) => {
    e.preventDefault();
    setNewState(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  
    const body = { "currentState": currentState , "newState": newState };
    console.log("number", typeof(newState));
    console.log("body",body)
    console.log({})
    axios
      .put(`http://localhost:5000/api/card/${props.id}`, body)
      .then((res) => {
        alert('카드 변경 성공 :)');
        location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('카드 변경 실패 :(');
      });
  };
  return(
 <span>
   <form onSubmit={submitHandler}>
    <label>상태값</label>
    <input type="number" min="0" max="2" value={newState} onChange={stateHandler}></input>
    <button type="submit">카드변경</button>
    </form>
 </span>
   
  )
}
function card(props) {
 console.log(props)
  return (
    
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>{props.content}</Typography>
        <Typography sx={{ fontSize: 8 }} color="text.secondary">
          2022.04.30
        </Typography>
        <Typography variant="body2">{props.detail}</Typography>
      </CardContent>
      <CardActions>
       <button onClick={(e)=>{
         axios.delete(`http://localhost:5000/api/card/${props.id}`).
         then((response)=>{
  console.log("success")
  location.reload()
}).catch(()=>{console.log("fail")})

       }}>Delete</button>
      </CardActions>
      <StateUpdate id ={props.id}current= {props.state}></StateUpdate>
    </React.Fragment>
  );
}
function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}

export default OutlinedCard;
