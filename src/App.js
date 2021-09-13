import './App.css';
import { Route } from 'react-router-dom'
import DefaultHoc from './hoc/Default_hoc';
import HomePage from './Pages/HomePage';
import MovieHOC from './hoc/MovieHOC';

import MoviePage from './Pages/MoviePage'

function App() {
  return (
   <>
    <DefaultHoc path="/" exact component={HomePage} />
    <MovieHOC path='/movie/:id' exact component={MoviePage} />
   </>
  );
}

export default App;
