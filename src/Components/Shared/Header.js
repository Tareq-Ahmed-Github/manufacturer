import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='bg-black py-5 flex justify-between px-10 text-white'>
            <div>
                <Link className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/">HOME</Link>
                <Link className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/toolsall">Tools</Link>
            </div>
            <div>
                   {user ? <Link to="/login" onClick={logout} className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2'>LOGOUT</Link> 
                   : 
                   <Link className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/login">LOGIN</Link>}
                
                <Link className='hover:bg-slate-800 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/signup">SIGNUP</Link>
            </div>

        </div>
    );
};

export default Header;