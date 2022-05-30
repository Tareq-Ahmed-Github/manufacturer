import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = ({ children }) => {
  const [dark, setDark] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  const [admin] = useAdmin();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menubar = <>
    <Link to="/" className=' mx-3 hover:text-stone-100 lg:mt-3 font-bold'>HOME</Link>
    <Link to="/about" className=' mx-3 lg:mt-3 hover:text-stone-100 font-bold'>ABOUT</Link>

    {user ? <Link to="/tools" className=' mx-3 lg:mt-3 hover:text-stone-100 font-bold'>
      TOOLS
    </Link> : <p></p>}
    {user ? <Link to="/dashboard" className=' mx-3 lg:mt-3 hover:text-stone-100 font-bold'>
      DASHBOARD
    </Link> : <p></p>}

    <Link to="/reviews" className='font-bold mx-3 lg:mt-3 hover:text-stone-100'>
      REVIEWS                    </Link>
    <Link to="/blogs" className='font-bold mx-3 lg:mt-3 hover:text-stone-100 '>
      BLOGS
    </Link>
    <Link to="/contact" className=' font-bold mx-3 lg:mt-3  hover:text-stone-100 '>
      CONTACT
    </Link>
    <div className='sm:mt-5 lg:mt-0'>
      {user ? <Link to="/login" onClick={logout} className=' font-bold mx-3   btn hover:text-black'>LOGOUT</Link> : <Link to="/login" className=' font-bold mx-3   btn hover:text-black'>LOGIN</Link>}

    </div>
    <div>
      {user ? <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={user.photoURL} alt='profile' />
        </div>
      </div> : <p></p>}
    </div>
  </>
  return (
    <div class=''>
      <div class='drawer-content flex flex-col'>
        <div class='w-full navbar bg-base-100 fixed top-0 z-50 lg:px-20'>
          {pathname.includes("dashboard") && (
            <label
              tabindex='0'
              for='my-drawer-2'
              class='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          )}
          <div class='flex-1 px-2 mx-2 text-2xl'>Bicycle Hunt</div>
          <div class='flex-none lg:hidden'>
            <label for='my-drawer-3' class='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                class='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>

          <div class='flex-none hidden lg:block'>
            <ul class='menu menu-horizontal gap-x-2'>
              <li>
                <NavLink to='/' className='rounded-lg'>
                  Home
                </NavLink>
              </li>
              {admin && (
                <li>
                  <NavLink to='/dashboard' className='rounded-lg'>
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to='/about' className='rounded-lg'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/blogs' className='rounded-lg'>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to='/toolsall' className='rounded-lg'>
                  Tools
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Contact
                </NavLink>
              </li>
              <li>
                {user ? <NavLink to="/login" onClick={logout} className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2'>LOGOUT</NavLink>
                  :
                  <NavLink className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/login">LOGIN</NavLink>
                }
                <NavLink to='/signup' className='rounded-lg'>
                  Signup
                </NavLink>
              </li>
              <li>
                {user ? <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} alt='profile' />
                  </div>
                </div> : <p></p>}
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Navbar;