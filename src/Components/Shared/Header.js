import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-400 py-5 flex justify-between px-10'>
            <div>
                <Link className='hover:bg-slate-500 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/">HOME</Link>
            </div>
            <div>
                <Link className='hover:bg-slate-500 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/login">LOGIN</Link>
                <Link className='hover:bg-slate-500 hover:font-bold font-semibold mx-1 hover:rounded p-2' to="/signup">SIGNUP</Link>
            </div>

        </div>
    );
};

export default Header;