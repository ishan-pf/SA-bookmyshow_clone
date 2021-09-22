import './App.css';
import { Route } from 'react-router-dom'
import DefaultHoc from './hoc/Default_hoc';
import HomePage from './Pages/HomePage';
import MovieHOC from './hoc/MovieHOC';
import PlaysHOC from './hoc/PlaysHOC';
import axios from 'axios';

import MoviePage from './Pages/MoviePage'
import PlaysPage from './Pages/PlaysPage';


axios.defaults.baseURL = "https://api.themoviedb.org/3/"

axios.defaults.params = {};

axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY ;
 
function App() {
  return (
   <>
    <DefaultHoc path="/" exact component={HomePage} />
    <MovieHOC path='/movie/:id' exact component={MoviePage} />
    <PlaysHOC path="/plays" exact component={PlaysPage} />
   </>
  );
}

export default App;
