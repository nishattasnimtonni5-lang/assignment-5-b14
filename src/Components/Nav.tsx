
import nav from "../assets/logo-text.png"
import { FiMenu } from "react-icons/fi";
const Nav = () => {
    return (
       
        
        <div className="sticky z-50 top-0 bg-white">

        <div className="flex justify-between items-center py-2 px-4 md:px-8 ">
            <button className="md:hidden text-2xl ml-4"><FiMenu size={30} /></button>
         
            <div >
                <img src={nav} alt="navbarimage" className="md:w-30 w-28 mx-8 "/>
            </div>
            <nav className="flex justify-between ">
                <ul className="hidden md:flex w-1/3  items-center justify-center gap-5">
                    <li><a href="" className="hover:text-pink-500 text-gray-500">Home</a></li>
                    <li><a href="" className="hover:text-pink-500 text-gray-500">Technologies</a></li>
                    <li><a href="" className="hover:text-pink-500 text-gray-500">Projects</a></li>
                    <li><a href="" className="hover:text-pink-500 text-gray-500">About</a></li>
                    <li><a href="" className="hover:text-pink-500 text-gray-500">Contact</a></li>
                </ul>
                <div className="items-center flex gap-5 px-3 md:gap-5  ">
                    <button className="font-semibold  md:px-2 md:py-2 text-gray-700">Sign in</button>
                    <button className="text-white border border-pink-500 bg-pink-600 hover:text-pink-500 hover:bg-white font-bold rounded-3xl px-5 py-2 transition-colors">Sign up</button>
                </div>
            </nav>
            </div>
         <hr className=" mx-auto border-gray-300" />
          
        </div>
        
         
    );
};

export default Nav;