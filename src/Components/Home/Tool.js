import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, picture, price, minorder, description, available } = tool;
    const navigate = useNavigate();
    const navigateToItemDetail = _id => {
        navigate(`/toolsall/${_id}`);
    }
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
            <div class="card-actions justify-center my-2">
            <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">purchase</button>
            </div>
        </div>

    );
};

export default Tool;