import Table from '../../../orgainisms/Table';
import './style.css';

function App() {
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
