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
    console.log('before', cards);
    const response = await axios.get('http://localhost:5000/api/card');
    console.log('response', response);
    setCards(response.data.data.card);
    console.log('after', cards);
  };

  useEffect(fetchData, []);
  useEffect(() => {
    if (cards.length > 0) {
      setToDo(cards.filter((value) => value.state == 0));
      setProgress(cards.filter((value) => value.state == 1));
      setDone(cards.filter((value) => value.state == 2));
    }
  }, [cards]);
  return (
    <div>
      <h1>SCHEDULING</h1>
      <div className="table-container">
        {ToDo ? <Table state={'TODO'} cards={ToDo}></Table> : 'loading'}
        {Progress ? <Table state={'PROGRESS'} cards={Progress}></Table> : 'loading'}
        {Done ? <Table state={'DONE'} cards={Done}></Table> : 'loading'}
        {<Table state={'CREATE'}></Table>}
      </div>
    </div>
  );
}
export default App;
