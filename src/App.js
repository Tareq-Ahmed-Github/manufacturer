import './App.css';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './Components/Routes/PublicRoutes';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import { privateRoutes } from './Components/Routes/PrivateRoutes';
import AdminRoute from './Components/Authentication/AdminRoute';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import Dashboard from './Components/Private/Dashboard/Dashboard';
import AddReview from './Components/Private/Dashboard/AddReview';
import MyProfile from './Components/Private/Dashboard/MyProfile';
import AddOrders from './Components/Private/Dashboard/AddOrders';
import ManageTools from './Components/Private/Dashboard/ManageTools';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

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
            <Route path='addorders' element={<AddOrders />} />
            <Route path='managetools' element={<ManageTools />} />
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
