import './App.css';
import { Route } from 'react-router-dom'
import DefaultHoc from './hoc/Default_hoc';
import HomePage from './Pages/HomePage'

function App() {
  return (
   <>
    <DefaultHoc path="/" component={HomePage} />
    
   </>
  );
}

export default App;
