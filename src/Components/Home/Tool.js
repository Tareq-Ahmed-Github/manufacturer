import React from 'react';

const Tool = ({ tool }) => {
    const { name, picture, price, minorder, description, available } = tool;
    return (
            <div class="card w-full m-4 lg:card-side h-full bg-base-100 shadow-xl mb-3">
                <figure><img src={picture} alt="Album" class="rounded-xl w-48 mx-auto" /></figure>
                <div class=" text-left px-5">
                    <h2 class="card-title text-2xl font-bold">{name}</h2>
                    <h3 className='font-semibold'>Price : {price}</h3>
                    <h3 className='font-semibold'>Minimum Order : {minorder}</h3>
                    <h3 className='font-semibold'>Available : {available}</h3>
                    <h3 className='font-semibold'>Benfits : {description}</h3>
                          
                </div>
                <div class="my-5 border rounded-3xl w-60 mx-auto py-3 bg-black bg-opacity-90 hover:bg-slate-700 text-orange-100 hover:text-white">
                        <button className="btn uppercase font-bold ">purchase</button>
                    </div>
            </div>

    );
};

export default Tool;