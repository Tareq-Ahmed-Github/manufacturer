import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Security/Login';
import Header from './Components/Shared/Header';
import Signup from './Components/Security/Signup';
import Banner from './Components/Home/Banner';
import Footer from './Components/Shared/Footer';
import Tools from './Components/Home/Tool';
import Extra1 from './Components/Home/Extra1';
import Reviews from './Components/Home/Reviews';
import Info from './Components/Home/Info';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/' element={<Tools></Tools>}></Route>
        <Route path='/' element={<Extra1></Extra1>}></Route>
        <Route path='/' element={<Reviews></Reviews>}></Route>
        <Route path='/' element={<Info></Info>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
