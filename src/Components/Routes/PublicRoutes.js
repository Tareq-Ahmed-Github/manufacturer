import Home from "../Home/Home";
import Login from "../Security/Login";
import About from './../About';

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/login", name: "Login", Component: Login },
];