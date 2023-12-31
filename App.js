import React, { lazy,Suspense, useEffect , useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
const Contact = lazy( () => import("./components/Contact"))
//chunking = lazy loading = dynamic bundling = code splitting


const Applayout = () => {

  const [userName , setUserName] = useState();
useEffect(()=>{
const data = {
  name : "MS DHONI",
};
setUserName(data.name);
},[])

  return (
    <Provider store = {AppStore}>
    <UserContext.Provider value = {{loggedInUser : userName, setUserName}}>
    <>


      <Header  />
      <Outlet />
      <Footer />
      
    </>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [{
      path: "/about",
      element: <About />,
      children: [{
        path: "profile",
        element: <Profile />
      }]
    },
     {
      path: "/contact",
      element: <Suspense fallback ={<h1>Loading Contacts.........</h1> }>
        <Contact />
      </Suspense>,
    },
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/restaurant/:id",
      element: <RestaurantMenu />,
    },
    {
      path: "/cart",
      element: <Cart />,
    }
  ]
  
  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
