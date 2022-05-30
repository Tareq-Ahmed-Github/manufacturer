import React from 'react';
import { Link } from 'react-router-dom';
import useTools from '../../Hooks/useTools';

const ManageTools = () => {
    const [Products, setProducts] = useTools();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `http://localhost:5000/tools/${id}`
            fetch(url, {
                meh2od: 'DELETE'
            })
                .h2en(res => res.json())
                .h2en(data => {
                    const remaining = Products.filter(Product => Product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div class="">
            <div class="w-full border bg-green-700 rounded-lg mt-80">
                    <div className='row fw-bold grid grid-cols-4'>
                        <h2 className='col-3 border border-black py-4 rounded-t-lg'>Photo</h2>
                        <h2 className='col-3 border border-black py-4 rounded-t-lg'>Quantity</h2>
                        <h2 className='col-3 border border-black py-4 rounded-t-lg'>Delete</h2>
                        <h2 className='col-3 border border-black py-4 rounded-t-lg'>Name</h2>
                    </div>
                {
                    Products?.map(Product =>
                        <div key={Product._id} className='bg-green-700 w-96'>
                            <div className='row fw-bold grid grid-cols-4'>
                                <strong className='text-center col-3 mb-2 border border-slate-900'>{Product.name.slice(0, 30)}</strong>
                                <strong className='text-center col-3 w-25 mb-2 border border-slate-900'><img className='w-100 h-100' src={Product.picture} alt="" /></strong>
                                <strong className='text-center col-3 mb-2 border border-slate-900'>{Product.available}</strong>
                                <strong className='text-center col-3 mb-2 border border-slate-900'><button onClick={() => handleDelete(Product._id)} className=" my-auto border rounded-2xl px-3 fw-bold bg-red-500">DELETE</button></strong>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='text-center'>
                <Link to='/addorders'><button className='bg-black py-2 px-3 my-5 rounded border hover:bg-slate-300'>ADD NEW COLLECTION</button></Link>
            </div>
        </div>
    );
};

export default ManageTools;