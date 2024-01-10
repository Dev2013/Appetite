import { CARD_PIC_URL } from "../utils/constants";
const Restcard = ({ resdata }) => {
    console.log(resdata)
    const { name, cuisines, areaName, avgRating, cloudinaryImageId, costForTwo } = resdata;

    return (
        <div data-testid="res" className="rest-card relative bg-white-smoke dark:bg-gray-800 rounded-md overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img 
                src={CARD_PIC_URL + cloudinaryImageId} 
                alt={name} 
                className="w-full object-cover" 
                style={{ maxHeight: '200px' }} // Optional: Limit the maximum height of the image
            />
            <div className="p-4 dark:text-white">
                <h3 className="text-xl font-semibold dark:text-white">{name}</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400">{cuisines.join(", ")}</h4>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-yellow-400 dark:text-yellow-300">⭐ {avgRating}</span>
                    <span className="text-gray-500 dark:text-gray-400">{areaName}</span>
                    <span className="text-gray-500 dark:text-gray-400">₹{costForTwo} for two</span>
                </div>
            </div>
        </div>
    );
};

export const  Withpromobanner = (Restcard) =>{
return (props) => {
    const {resdata}=props;
 return (
    <div>
    <label className= " bg-green-400 text-white m-5 p-2  rounded-md">Promoted</label>
    <Restcard {...props}/>
    </div>
 )
}
};



export default Restcard;
