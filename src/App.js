// import logo from './logo.svg';
// import './App.css';
import BoxGenerator from './components/BoxGenerator';
import {useState} from 'react'

function App() {
  const[boxes, setBoxes] = useState([])
  const newBox = (color) => {
    setBoxes(oldBoxes => [...oldBoxes, color])
  }

  return (
    <div className="App">
      <BoxGenerator newBox={newBox} boxes={boxes}></BoxGenerator>
    </div>
  );
}

export default App;
