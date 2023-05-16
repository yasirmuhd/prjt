import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddBlog from './components/AddBlog';
import Home from "./components/Home"




function App() {
  return (
    <div>
      <Navbar/>
      <br/><br/>
      <br/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
