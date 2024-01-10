import  {LOGO_URL} from "../utils/constants";
import {useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
    const [btnName, setbtnName] = useState("login");
    const status = useOnlineStatus();
    const  {loggedname} = useContext(UserContext); 
    const cartitem = useSelector((store)=>store.cart.items);
    console.log(cartitem);
    return (
        <div className=" bg-gray-900 text-white py-4 px-4 flex justify-between items-center">
            <Link to="/">
                <div className="logo-container">
                    <img width="80px" src={LOGO_URL} alt="Logo" />
                </div>
            </Link>
            <div className="nav-item-container">
                <ul className=" flex items-center space-x-6">
                    <li className="flex items-center">
                        {status ? "🟢" : "🔴"}
                        <span className="ml-2 text-lg">Online Status</span>
                    </li>
                    <li><Link to="/" className="hover:opacity-75 transition-opacity duration-300 text-lg">Home</Link></li>
                    <li><Link to="/about" className="hover:opacity-75 transition-opacity duration-300 text-lg">About</Link></li>
                    <li><Link to="/contact" className="hover:opacity-75 transition-opacity duration-300 text-lg">Contact</Link></li>
                    {/* <li><Link to="/" className="hover:opacity-75 transition-opacity duration-300 text-lg">Cart</Link></li> */}
                    <li><Link to="/grocery" className="hover:opacity-75 transition-opacity duration-300 text-lg">Grocery</Link></li>
                    <li><Link to="/cart" className="hover:opacity-75 transition-opacity duration-300 text-lg">Cart-{cartitem.length}</Link></li>
                    <button className="login-button bg-blue-500 hover:bg-blue-300 text-white text-lg py-2 px-5 rounded" onClick={() => {
                        (btnName === "login") ? setbtnName("logout") : setbtnName("login");
                    }}>{btnName}</button>
                    <li className="flex items-center">
                        <span className="ml-2 text-lg">Hi {loggedname}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
