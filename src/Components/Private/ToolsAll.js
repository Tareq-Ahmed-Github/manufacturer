import React from 'react';
import Tool from '../Home/Tool';
import useTools from '../Hooks/useTools';
import AddOrders from './Dashboard/AddOrders';
import { useEffect } from 'react';
import { useState } from 'react';

const ToolsAll = () => {
    const [tools] = useTools();
    const [addOrders, setAddOrders] = useState([])
    useEffect(() => {
        fetch('https://calm-lake-89877.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setAddOrders(data))
    }, [])
    return (
        <div className='flex items-center flex-col my-12 pb-5'>
            <h1 className='text-primary text-5xl my-10 text-center'>BEST SELLING TOOLS</h1>
            <div className='grid grid-cols-3 gap-3'>
                {tools?.slice(0, 5)?.map(tool => <Tool key={tool._id}
                    tool={tool}
                ></Tool>)}
            </div>
        </div>
    );
};

export default ToolsAll;