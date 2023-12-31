import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({data,expandItem,setShowIndex}) => {
    console.log(data)



    return <div className=" bg-slate-200  shadow-md w-6/12 mx-auto my-2 p-2">
         <div className="flex justify-between cursor-pointer" onClick={ () => {
            setShowIndex()
         }}>
         <span className="font-bold">{data.title} ({data.itemCards.length})</span>
         <span>🔽</span>
         </div>
         
         <div>
          {expandItem && <ItemList itemList = {data.itemCards} /> }
         </div>
    </div>
}
export default MenuCategory;