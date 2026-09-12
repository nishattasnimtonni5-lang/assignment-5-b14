import React from 'react';
import nav from "../assets/logo-text.png"
const Nav = () => {
    return (
        <div className="sticky z-50 top-0 bg-white">
        <div className="flex justify-between items-center py-2 ">
            <div className="">
                <img src={nav} alt="navbarimage" className="w-40 mx-8"/>
            </div>
            <nav className="flex justify-between ">
                <ul className="flex  items-center justify-center gap-5 px-27">
                    <li><a href="" className="hover:text-pink-500">Home</a></li>
                    <li><a href="" className="hover:text-pink-500">Technologies</a></li>
                    <li><a href="" className="hover:text-pink-500">Projects</a></li>
                    <li><a href="" className="hover:text-pink-500">About</a></li>
                    <li><a href="" className="hover:text-pink-500">Contact</a></li>
                </ul>
                <div className=" flex gap-5 px-3 ">
                    <button className="font-semibold">Sign in</button>
                    <button className="text-white border border-pink-500 bg-pink-600 hover:text-pink-500 hover:bg-white font-bold rounded-3xl px-5 py-2">Sign up</button>
                </div>
            </nav>
            </div>
          <div className="divider"></div>
          
        </div>
         
    );
};

export default Nav;