import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Security/Login';
import Signup from './Components/Security/Signup';
import Banner from './Components/Home/Banner';
import Footer from './Components/Shared/Footer';
import Tools from './Components/Home/Tools';
import Extra1 from './Components/Home/Extra1';
import Reviews from './Components/Home/Reviews';
import Info from './Components/Home/Info';
import ToolsAll from './Components/Private/ToolsAll';
import RequireAuth from './Components/Security/RequireAuth';
import BusinessSummary from './Components/Home/Bussiness';
import { publicRoute } from './Components/Routes/PublicRoutes';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import { privateRoutes } from './Components/Routes/PrivateRoutes';
import AdminRoute from './Components/Authentication/AdminRoute';
import Navbar from './Components/Shared/Navbar';
import Dashboard from './Components/Private/Dashboard/Dashboard';
import AddReview from './Components/Private/Dashboard/AddReview';
import MyProfile from './Components/Private/Dashboard/MyProfile';
import MyOrders from './Components/Private/Dashboard/MyOrders';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/' element={<Tools></Tools>}></Route>
        <Route path='/toolsall' element={<RequireAuth> <ToolsAll></ToolsAll> </RequireAuth>}></Route>
        <Route path='/' element={<BusinessSummary/>}></Route>
        <Route path='/' element={<Extra1></Extra1>}></Route>
        <Route path='/' element={<Reviews></Reviews>}></Route>
        <Route path='/' element={<Info></Info>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes> */}
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='addreview' element={<AddReview />} />
            <Route path='myprofile' element={<MyProfile />} />
            <Route path='myorders' element={<MyOrders />} />
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
