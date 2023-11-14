  import DataBase from './DataBases/movieDataBase';
  import './App.css';
  import NewCards from './components/NewCard';
  import MovieNav from './components/navbar';
  import SearchMovie from './components/search';
  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import { useState } from 'react';

  function App() {
    const [movies,setMovies]=useState(DataBase)
    const addMovieToDatabase = (newMovie) => {
      const Maxid = Math.max(...DataBase.map((movie) => movie.id));
      newMovie.id = Maxid + 1;
      setMovies([...movies,newMovie])
      DataBase.push(newMovie)
    };
    return (
      <div className="App">
      <Router>
        <MovieNav></MovieNav>
        <Routes>
          <Route>
          <Route path='/' element={<SearchMovie></SearchMovie>}></Route>
          </Route>
        </Routes>
      </Router>
      <hr/>
      <NewCards  onAddMovie={addMovieToDatabase} ></NewCards>
      </div>
    );
  }

  export default App;
