import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { imglink } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";




const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  restaurantInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(0)

  if (restaurantInfo === null) return <Shimmer />;

  const { info } = restaurantInfo.cards[0]?.card?.card;

  //const { itemCards } =
   // restaurantInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //  ?.card; 

  
  const { cards } =  restaurantInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

  const categoryCards = cards.filter( (c) => {
    return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  // console.log(info)
  //console.log(categoryCards)
  return (
  
    <>
       {/* <div className="menu">
        <div>
          <h1>{info.name}</h1>
          <h2>{info.id}</h2>
          <img src={imglink + info.cloudinaryImageId} />
          <h3>{info.area}</h3>
          <h3>{info.city}</h3>
          <h3>{info.avgRating} stars</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {
             
              Object.values(itemCards).map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
              ))
            }
          </ul>
        </div>
      </div>*/}
      <div>
      <h1 className="font-bold text-center">{info.name}</h1>
      <h1 className="font-bold text-center">{info.cuisines.join(", ")}</h1>
      </div> 
      {categoryCards.map((mcat,index) =>{
        return <MenuCategory key={mcat?.card.card.title} data = {mcat?.card?.card} 
        expandItem={index===showIndex ? true : false}
        setShowIndex={() => {setShowIndex(index)}} />

      })}
    </>
  );
};
export default RestaurantMenu;
