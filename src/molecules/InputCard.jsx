import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

function InputCard() {
  const [content, setContent] = useState('');
  const [detail, setDetail] = useState('');
  const [deadline, setDeadline] = useState();
  const [state, setState] = useState(0);

  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const detailHandler = (e) => {
    e.preventDefault();
    setDetail(e.target.value);
  };
  const deadlineHandler = (e) => {
    e.preventDefault();
    setDeadline(e.target.value);
  };
  const stateHandler = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const body = { content, detail, deadline, state };
    axios
      .post('http://localhost:5000/api/card', body)
      .then((res) => {
        alert('카드 생성 성공 :)');
        location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('카드 생성 실패 :(');
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={content} onChange={contentHandler} placeholder="할 일을 적어주세요"></input>
        <input type="text" value={detail} onChange={detailHandler} placeholder="상세 사항을 적어주세요"></input>
        <input type="datetime-local" value={deadline} onChange={deadlineHandler} placeholder="할 일을 적어주세요"></input>
        <br />
        <label>상태값: </label>
        <input type="number" min="0" max="2" value={state} onChange={stateHandler}></input>
        <br />
        <button type="submit">카드 생성</button>
      </form>
    </div>
  );
}

export default function OutlinedCard() {
  return <Box sx={{ minWidth: 275 }}>{InputCard()}</Box>;
}
