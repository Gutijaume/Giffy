import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./Services/getGifs";

function App() {
 

  const [gifs, setGifs] = useState([]);

  useEffect(function () {
   getGifs({keyword: 'bts'}).then(gifs => setGifs(gifs))
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id}/>)
        }  
      </section>
    </div>
  );
}

export default App;