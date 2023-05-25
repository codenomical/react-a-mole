import './App.css';
import MoleContainer from './Components/MoleContainer';
import { useState } from 'react'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for( let i=0; i<9; i++ ) {
      hills.push(<MoleContainer key={i} score={score} setScore={setScore} />)
    }

    // repositioned the moles into 3 columns.
    return (
      <div className="mole-grid">
        { hills }
      </div>
    )
  }

  // restyled the score display
  return (
    <div className="App">
      <div className="score-display"> Score: { score }</div>
      { createMoleHill() }
    </div>
  );
}

export default App;
