import { useContext } from "react";
import { imglink } from "../constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({cloudinaryImageId, name, cuisines}) => {

  const { loggedInUser } = useContext(UserContext);
 
    return (
      <div className="flex-wrap m-3 p-3 w-64 hover:shadow-lg">
        <img className="flex mt-2"
          src={
            imglink +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
          <h3>{loggedInUser}</h3>
      </div>
    );
  };
  export default RestaurantCard;


  export const closedRestaurant = (RestaurantCard) =>{
    return (props)=>{
      return ( <div className="bg-gray-500">
        <label className="absolute">CLOSED</label>
        <RestaurantCard {...props} />
      </div>
    )}
  }
  //higher order components