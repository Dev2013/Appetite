import React from 'react'
import { useEffect ,useState} from 'react';
import { IMAGE_CDN_URL } from "../utils/constants";
import Shimmer from './Shimmer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import { IMG_MENU_URL } from '../utils/constants';
import useMenu from '../utils/useMenu';
import ItemList from './ItemList';
import {
  faStar,
  faStopwatch,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const { resid } = useParams();
  const resinfo = useMenu(resid);
  const [activeAccordion, setActiveAccordion] = useState(0);

  if (resinfo === null) return <Shimmer />;

  const {
      name,
      cuisines,
      locality,
      avgRatingString,
      sla,
      costForTwoMessage,
      cloudinaryImageId,
      aggregatedDiscountInfo
  } = resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 const category = resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c?.card?.card?.["@type"]
    =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});

  return (
      <div className="bg-gray-900 dark:text-white  flex flex-col items-center justify-center p-11">
          <div className="restaurant-info mb-6 flex  items-center  justify-centre w-full border-white">
              <img
                  className="res-image w-auto h-auto pr-6 mr-4"
                  src={IMAGE_CDN_URL + cloudinaryImageId}
              />
              <div className="res-details m-4 p-4">
                  <p className="res-name text-xl font-bold">{name}</p>
                  <p className="res-cuisines">{cuisines.join(",")}</p>
                  <p className="res-locality">{locality}</p>
                  <div className="res-ratings flex items-center space-x-4">
                      <p>
                          <FontAwesomeIcon icon={faStar} /> {avgRatingString}
                      </p>
                      <p>
                          <FontAwesomeIcon icon={faStopwatch} /> {sla?.slaString}
                      </p>
                      <p>
                          <FontAwesomeIcon icon={faMoneyBill} /> {costForTwoMessage}
                      </p>
                  </div>
              </div>
              {/* <div className="res-offers ml-4 p-4 bg-blue-500   rounded-md">
                  <p className="offers text-lg font-bold">Offers : </p>
                  <p>{aggregatedDiscountInfo?.descriptionList[0].meta}</p>
                  <p>{aggregatedDiscountInfo?.descriptionList[1].meta}</p>
              </div> */}
          </div>
     <div className="bg-gray-900 dark:text-white flex flex-col items-center justify-center p-5 w-full">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 w-6/12">
        <div className="flex-grow w-full overflow-y-auto p-4 md:p-8">
          {category.map((c, index) => (
            <div
              key={c?.card?.card?.title}
              className="bg-gray-900 rounded-lg shadow-md mb-6 p-6 md:p-8"
            >
              <h2
                className="font-semibold text-2xl mb-4 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
                onClick={() => setActiveAccordion(index === activeAccordion ? null : index)}
              >
                {c?.card?.card?.title} 
                <span className="text-gray-600 text-lg">({c?.card?.card?.itemCards.length})</span>
              </h2>

              {/* Render ItemList only if the accordion is active */}
              {index === activeAccordion && <ItemList data={c} />}
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
  );
};


export default Menu;
