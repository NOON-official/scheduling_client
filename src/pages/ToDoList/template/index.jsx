import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../orgainisms/Table';
import './style.css';

function App() {
  const [cards, setCards] = useState({ cards: [] });
  const [ToDo, setToDo] = useState([]);
  const [Process, setProcess] = useState([]);
  const [Done, setDone] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/card');
      await setCards(response.data.data.card);
      await setToDo(cards.filter((value) => value.state == 0));
      await setProcess(cards.filter((value) => value.state == 1));
      await setDone(cards.filter((value) => value.state == 2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(fetchData, []);

  return (
    <div>
      <h1>SCHEDULING</h1>
      <div className="table-container">
        <Table state={'TODO'}></Table>
        <Table state={'PROGRESS'}></Table>
        <Table state={'DONE'}></Table>
        <Table state={'CREATE'}></Table>
      </div>
    </div>
  );
}

export default App;
