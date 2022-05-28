import React from 'react';

const Tool = ({ tool }) => {
    const { name, picture, price, minorder, description, available } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" class="rounded-xl w-48 mx-auto" /></figure>
            <div class=" text-left px-5">
                <h2 class="card-title text-2xl font-bold">{name}</h2>
                <h3 className='font-semibold'>Price : {price}</h3>
                <h3 className='font-semibold'>Minimum Order : {minorder}</h3>
                <h3 className='font-semibold'>Available : {available}</h3>
                <h3 className='font-semibold'>Benfits : {description}</h3>

            </div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary mx-auto my-2">Purchase</button>
            </div>
        </div>

    );
};

export default Tool;