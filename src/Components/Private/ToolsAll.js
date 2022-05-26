import React from 'react';
import Tool from '../Home/Tool';
import useTools from '../Hooks/UseTools';

const ToolsAll = () => {
    const [tools] = useTools();
    return (
        <div className='flex items-center flex-col my-12 pb-5'>
            <h1 className='text-primary text-5xl my-10 text-center'>BEST SELLING TOOLS</h1>
            <div className='grid grid-cols-3 gap-3'>               
                {tools?.slice(0, 100)?.map(tool => <Tool key={tool._id}
                    tool={tool}
                ></Tool>)}
            </div>
            <button className="lg:my-12 font-bold bg-black py-2 border rounded px-5 hover:bg-slate-700 hover:px-6 hover:text-white text-orange-100">More TOOls</button>
        </div>
    );
};

export default ToolsAll;