import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../orgainisms/Table';
import './style.css';

function App() {
  const [cards, setCards] = useState([]);
  const [ToDo, setToDo] = useState();
  const [Progress, setProgress] = useState();
  const [Done, setDone] = useState();

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/card');
    setCards(response.data.data.card);
  };

  useEffect(fetchData, []);
  useEffect(() => {
    if (cards.length > 0) {
      setToDo(cards.filter((value) => value.state == -1));
      setProgress(cards.filter((value) => value.state == 0));
      setDone(cards.filter((value) => value.state == 1));
    }
  }, [cards]);

  console.log('cards', cards);
  return (
    <div>
      <h1>SCHEDULING</h1>
      <div className="table-container">
        {ToDo ? <Table state={'TODO'} cards={ToDo}></Table> : <Table loading="loading"></Table>}
        {Progress ? <Table state={'PROGRESS'} cards={Progress}></Table> : <Table loading="loading"></Table>}
        {Done ? <Table state={'DONE'} cards={Done}></Table> : <Table loading="loading"></Table>}
        {<Table state={'CREATE'}></Table>}
      </div>
    </div>
  );
}

export default App;
