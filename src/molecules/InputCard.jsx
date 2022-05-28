import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import './InputCard.css';

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
      })
      .catch((err) => {
        console.log(err);
        alert('카드 생성 실패 :(');
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" className="input-area" value={content} onChange={contentHandler} placeholder="할 일을 적어주세요"></input>
        <input type="text" className="input-area" value={detail} onChange={detailHandler} placeholder="상세 사항을 적어주세요"></input>
        <input type="datetime-local" className="input-area" value={deadline} onChange={deadlineHandler} placeholder="할 일을 적어주세요"></input>
        <br />
        <label>상태값: </label>
        <input type="number" min="0" max="2" className="input-area" value={state} onChange={stateHandler}></input>
        <br />
        <button type="submit" className="submit-area">
          카드 생성
        </button>
      </form>
    </div>
  );
}

export default function OutlinedCard() {
  return <Box sx={{ minWidth: 275 }}>{InputCard()}</Box>;
}
