import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearItems = () => {
    dispatch(clearCart());
  };
  const removeItem = (index) => {
    dispatch(deleteItem(index));
  };
  //console.log(cartItems)
  return (
    <>
      <h1 className="flex justify-center font-bold ">Welcome to the cart</h1>
      <div className="flex justify-center">
      <button
        className=" m-2 p-2 w-24 bg-slate-300 hover:bg-slate-600 rounded-md "
        onClick={clearItems}
      >
        Clear Cart
      </button></div>
      
        {cartItems.map((item, index) => (
            <div className=" flex justify-center h-25 m-2 p-2 w-auto ">
          
        <div className="flex float-right m-2 p-2 border-separate rounded-lg border border-slate-400 w-1/2 ">
        {item.card.info.name}</div>
            <button
              className="m-2 p-2 w-24 bg-slate-300 hover:bg-slate-600 rounded-md flex float-left"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
        
          </div>
        ))}
      
    </>
  );
};
export default Cart;
