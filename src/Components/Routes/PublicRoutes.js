import Blogs from "../Blogs";
import Contact from "../Contact";
import Home from "../Home/Home";
import Tools from "../Home/Tools";
import Login from "../Security/Login";
import Signup from "../Security/Signup";
import About from './../About';

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/#tools", name: "Tools", Component: Tools},
  { path: "/about", name: "About", Component: About },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "Signup", Component: Signup }
];