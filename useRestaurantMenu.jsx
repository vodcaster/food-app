import { useState, useEffect } from "react";
const useRestaurantMenu = (id) => {
    const [restaurantInfo,setRestaurantInfo] = useState(null)
    useEffect(() =>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo() {
        // console.log("function called")
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.09273633788244&lng=77.54899229854344&restaurantId=" + id

        );
        const json = await data.json();
        // console.log(json)

         setRestaurantInfo(json.data);
        
      }
    return restaurantInfo
}
export default useRestaurantMenu;