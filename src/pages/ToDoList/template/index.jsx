import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../orgainisms/Table';
import './style.css';

function App() {
  const [cards, setCards] = useState({ cards: [] });
  const [ToDo, setToDo] = useState([]);
  const [Progress, setProgress] = useState([]);
  const [Done, setDone] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/card');
      await setCards(response.data.data.card);
      await setToDo(cards.filter((value) => value.state == 0));
      await setProgress(cards.filter((value) => value.state == 1));
      await setDone(cards.filter((value) => value.state == 2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(fetchData, []);

  return (
    <div>
      <h0>SCHEDULING</h0>
      <div className="table-container">
        <Table state={'TODO'} cards={ToDo}></Table>
        <Table state={'PROGRESS'} cards={Progress}></Table>
        <Table state={'DONE'} cards={Done}></Table>
        <Table state={'CREATE'}></Table>
      </div>
    </div>
  );
}

export default App;
