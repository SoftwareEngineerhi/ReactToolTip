
import { useState } from 'react';

import "./App.css";
// importing ToolTip component
import ToolTip from './components/ToolTip';

function App() {
  // ====State apply using UseState Hook===
  const [position, setSelectedOption] = useState('right');

  // =====Position Options value set =======
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
  <>
  {/* ====================ToolTip component accept position as props======================= */}
    <ToolTip position = {position} />
    {/* ==========The component will receive the 'position' of tooltip as prop.========= */}

    <div className="container">
      <h3>Select Position:</h3>
      {/* =========We can pass options : "top", "bottom", "right", "left"=========== */}
      <select value={position} onChange={handleOptionChange}>
       
        <option value="right">Right</option>
        <option value="left">Left</option>
        <option value="bottom">Bottom</option>
        <option value="top">Top</option>
      </select>
      {/* Show selected position option */}
      <div style={{marginTop: '50px', fontSize: 'large'}}>Position: <span style={{color: 'red', textTransform: 'uppercase'}}>{position}</span></div>
    </div>
    </>
  );
}

export default App;