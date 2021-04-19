import React from "react";
import Card from "./Card"
import "./styles/app.css"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  async componentDidMount(){
    await fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(movies => {
      this.setState({movies})
    })
  }

  render(){
    const { movies } = this.state;
    return (
      <div className="app">
        <h1>Liste des films du Studio Ghibli</h1>
        <ul className="movies">
          {movies.map(movie => (
            <li key={movie.id} className="movie"><Card movie={movie}/></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
