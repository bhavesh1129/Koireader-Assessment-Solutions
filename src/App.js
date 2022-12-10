import React, { useState, useEffect } from "react";

function App() {

  const [images, setImages] = useState([]);
  const [currImageIdx, setCurrImageIdx] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setImages(data))
  }, []);

  const handlePrevious = () => {
    if (currImageIdx > 0) {
      setCurrImageIdx(currImageIdx - 1);
    }
  };
  const handleNext = () => {
    if (currImageIdx < images.length - 1) {
      setCurrImageIdx(currImageIdx + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img src={images[currImageIdx].url} alt="carousel" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
