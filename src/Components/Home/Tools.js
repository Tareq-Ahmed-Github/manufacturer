import React from 'react';
import Tool from './Tool';
import useTools from '../Hooks/useTools';
import { Link } from 'react-router-dom';

const Tools = () => {
    const [tools] = useTools();
    return (
        <div className='flex-col flex items-center my-12'>
            <h1 id='tools' className='text-primary text-5xl my-10 text-center'>BEST SELLING TOOLS</h1>
            <div className='flex-col lg:flex gap-3'>               
                {tools?.slice(0, 3)?.map(tool => <Tool key={tool._id}
                    tool={tool}
                ></Tool>)}
            </div>
            <Link to='/toolsall'  className="lg:my-12 font-bold bg-black py-2 border rounded px-5 hover:bg-slate-700 hover:px-6 hover:text-white text-orange-100">More TOOls</Link>
        </div>
    );
};

export default Tools;