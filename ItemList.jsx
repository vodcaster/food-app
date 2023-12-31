import { useDispatch } from "react-redux";
import { imglink } from "../constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({itemList}) => {
    //console.log(itemList)
    const dispatch = useDispatch()
    const addCartItem = (list) =>{
        dispatch(addItem(list))
    }
    return (
        <div >
       
        {itemList.map( (list) =>  <div className=" border-separate rounded-lg border border-slate-400 h-25 m-1 p-2">
        <div className="flex justify-between">
        <span className="w-9/12">
        <h1>{list.card.info?.name}</h1>
       <h1>₹ {list.card.info?.price/100}</h1>
       <div className=" font-extralight text-xs font-style: italic ">{list.card.info?.description}</div>
       </span>
       <span className="w-2/12 ">
        <img className="w-auto h-24 rounded-md" src={imglink + list.card.info?.imageId } alt="" />
        <button className="bg-black text-center text-fuchsia-50 rounded-md w-auto"
        onClick={()=>addCartItem(list)}>
            ADD +
        </button>
       </span>
       </div>
       </div>
        )}
        
        </div>
    )
}
export default ItemList;