import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { clearList, removeItem,addItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartinfo = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 ">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded text-lg font-bold"
        onClick={()=>{
            dispatch(clearList());
        }}
        >{cartinfo.length===0? <Link to="/">Back Home</Link>:"Clear Cart"}
          </button>
  {cartinfo.map((info, index) => (
    <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-white transform hover:scale-105 transition-transform duration-300 w-full max-w-xl m-4">

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-xl font-semibold mb-2">{info.card.info.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-400 mb-2">{info.card.info.description}</p>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="text-lg text-green-400 font-semibold">Rs {info.card.info.price / 100}</p>
          <div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
           onClick={()=>{
            dispatch(removeItem(index));
        }}
          >
            remove
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded" 
          onClick={()=>{
            dispatch(addItem(info));
        }}
          >
            Add
          </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  

  )
}

export default Cart;