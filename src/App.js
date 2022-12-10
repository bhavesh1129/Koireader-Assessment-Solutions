import React, { useState } from "react";

function App() {

  const [inputs, setInputs] = useState([""]);

  const handleAdd = () => {
    if (inputs.length >= 10) {
      return;
    }
    setInputs([...inputs, ""]);
  };

  const handleRemove = (idx) => {
    if (inputs.length <= 1) {
      return;
    }
    setInputs(inputs.filter((_, i) => i !== idx));
  };

  const handleChange = (event, idx) => {
    const updatedInputs = [...inputs];
    updatedInputs[idx] = event.target.value;
    setInputs(updatedInputs);
  };

  return (
    <div>
      {
        inputs.map((input, idx) => (
          <div key={idx} style={{
            margin: "10px"
          }}>
            <input type="text" value={input} onChange={(e) => handleChange(e, idx)}
              style={{
                border: "3px solid black",
                borderRadius: "4px"
              }}
            />
            <button onClick={handleAdd} style={{
              padding: "10px",
              marginLeft: "10px",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: "#007BFB",
              color: "white"
            }}>+</button>

            <button onClick={() => handleRemove(idx)} style={{
              padding: "10px",
              marginLeft: "10px",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: "#ED313F",
              color: "white"
            }}>x</button>
          </div>)
        )
      }
    </div>
  );
}

export default App;