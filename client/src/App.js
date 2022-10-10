import {BrowserRouter , Routes , Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


import './App.css';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Auth' element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
