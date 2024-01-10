import React from "react" ;
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Form } from "react-router-dom";
import About from "./components/About";
import { RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import {lazy , Suspense} from 'react';
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"));
const Applayout = () =>{
return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedname:"Devansh"}}>
    <div className="Applayout">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>
);
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [
        {
                path: "/",
                element: <Body/>
        
        },
        {
            path: "/about",
            element: <About/>
    
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
        {
            path: "/grocery",
            element: 
            <Suspense fallback={<h1>Separate bundle is loading aka concept of Lazy Loading....</h1>}>
                <Grocery/>
            </Suspense>
        },
        {
            path: "/restaurant/:resid",
            element: <Menu/>
        }
    ],
        errorElement : <Error/>
        
    }
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 
 