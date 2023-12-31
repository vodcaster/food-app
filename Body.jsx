import RestaurantCard, { closedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { loggedInUser , setUserName } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9654796&lng=77.7184638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   
    const { cards } = json.data
    const card = cards.filter( (rescard) => {
         return rescard.card.card.gridElements != null 
    })
    // console.log(card)
    const res = card.filter( (restaurant) => {
      return restaurant?.card.card.gridElements.infoWithStyle.restaurants != null 

    })
    // console.log(res)
     const value = res.map( (re) => {
    return re?.card.card.gridElements.infoWithStyle.restaurants
     })
  
     
      const  { restaurants }= res[0].card?.card?.gridElements?.infoWithStyle

 setAllRestaurants(restaurants)
 setFilteredRestaurants(restaurants)
 
  }
  const ClosedRestaurant = closedRestaurant(RestaurantCard);
  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) return <h1>Looks like you are offline. Please check your internet connection</h1>

  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <>
      <div className="flex justify-end">
        <input
          type="text"
          className="flex-wrap w-48 m-2 p-2 border-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="m-2 p-2 w-24 bg-slate-300 hover:bg-slate-600 rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          className="flex-wrap w-48 m-2 p-2 border-2"
          placeholder="Search"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap px-3 justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
          <Link to = {"/restaurant/" + restaurant.info.id }
          key={restaurant.info.id}
          >
           { restaurant.info.isOpen? <RestaurantCard {...restaurant.info}  /> 
         :  <ClosedRestaurant{...restaurant.info} />
          }
           
          
          </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
