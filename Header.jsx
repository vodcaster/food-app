import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Title = () => (
    <a href="/">
      <img
        className="w-24 flex-wrap"
        alt="FOODISTAN"
        src="https://cdn.dribbble.com/users/4913590/screenshots/15283932/media/b430f8df20aa4f1cc96e412c68db44d2.jpg"
      />
    </a>
  );
const Header = () => {
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems)
    return (
      <>
     
        <div className="flex shadow bg-white justify-between w-screen ">
          <Title />
          <div className="flex-wrap">
            <ul className="flex justify-end">
              <li className="m-2 p-2"><Link to="/">Home</Link></li>
              <li className="m-2 p-2"><Link to="/about">About us</Link></li>
              <li className="m-2 p-2"><Link to="/contact">Contact</Link></li>
              <li className="m-2 p-2"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  };
export default Header;
