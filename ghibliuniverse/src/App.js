import React from "react";
import Api from "./Api";

function App() {
  const movies = Api.getMovies();
  console.log(movies);

  return (
    <div className="App">
      <h1>Bienvenue dans Ghibli Universe</h1>
    </div>
  );
}

export default App;
