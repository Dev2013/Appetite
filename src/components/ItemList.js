import React from 'react'
import {useDispatch} from "react-redux";
import { addItem } from '../utils/cartSlice';


const ItemList = (props) => {
  const {data}=props;
  const {itemCards} = data?.card?.card;
  const dispatch = useDispatch();
  // console.log(itemCards);


  return (
    <div style={{ overflowY: 'hidden' }}>
    {itemCards.map((item, index) => (
      <div key={index} className="border-b border-gray-300 py-4">
        {/* Item Name, Price, and Add Button */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-lg">{item?.card?.info?.name}</span>
          <div className="flex items-center">
            <span className="text-green-600 mr-4">Rs {item?.card?.info?.price / 100}</span>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded" 
            onClick={()=>{
              dispatch(addItem(item));
            }}
            >
              Add
            </button>
          </div>
        </div>
  
        {/* Item Description */}
        <p className="mx-6 px-4 text-sm text-gray-400">
          {item?.card?.info?.description}
        </p>
      </div>
    ))}
  </div>
  
  )
}

export default ItemList