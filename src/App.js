import React, { useState } from "react";

function App() {

  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        Click me to Hide Element
      </button>
      {
        toggle &&
        <div>
          Toggle Challenge
        </div>
      }
    </div>
  );
}

export default App;
