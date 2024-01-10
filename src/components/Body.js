import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
// import restaurantList from "../utils/mockdata";
import Restcard,{Withpromobanner} from "./Restcard";
import { Link } from "react-router-dom";
const Body =()=> {
    console.log("getting redenred");
    const [res,setres]=useState([]);
    const [filter,setfilter]=useState([]);
    const [search,setsearch] = useState("");
    const PromoCard = Withpromobanner(Restcard);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.370739538374334&lng=79.42189771682024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const Json = await data.json();
        // console.log(Json)
        setres(Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(res);
        setfilter(Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // conditional Rendering
    return  res.length === 0 ? <Shimmer /> :
    (
      <div className="Body bg-gray-900 text-white p-6   ">
     <div className="dark-search mb-4">
    <input 
        type="text" 
        data-testid="input-search"
        placeholder="Search..." 
        value={search} 
        onChange={(e) => setsearch(e.target.value)} 
        className="bg-gray-800 text-white p-2 mx-4 w-full md:w-1/3 lg:w-1/2 rounded "
    />
          <button 
              onClick={() => {
                  const filterL = res.filter((r) => r.info.name.toLowerCase().includes(search.toLowerCase()));
                  setfilter(filterL);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-3 rounded ml-2"
          >
              Search
          </button>
          <button 
              onClick={() => {
                  const filterList = res.filter((res) => res.info.avgRating >= 4);
                  setfilter(filterList);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  mx-3 rounded ml-2"
          >
              Top Rated restaurant
          </button>
          <button 
              onClick={() => {
                  const filterList = res.filter((res) => res.info.veg === true);
                  setfilter(filterList);
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2  mx-3 rounded ml-2"
          >
             Veg
          </button>
          <button 
              onClick={() => setfilter(res)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mx-3 rounded ml-2"
          >
              Back
          </button>
      </div>
      <div className="rest-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-auto">
          {
              filter.map((restaurant) => 
                  <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id} style={{ textDecoration: 'none', color: 'white' }}>
                      {restaurant.info.sla.deliveryTime < 28 ? <PromoCard resdata={restaurant.info}/>:<Restcard resdata={restaurant.info} />}
                  </Link>
              )
          }
      </div>
  </div>

);
};
export default Body;