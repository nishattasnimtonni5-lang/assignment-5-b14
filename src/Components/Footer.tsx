import React from 'react';
import footerImg from "../assets/logo-text.png"
const footer = () => {
    return (<div>
         <hr className=" mx-auto border-gray-300" />
        <div className="flex pl-9 pt-10"> 
        <div>
            <img src={footerImg} alt="image" className="my-5" />
          < div className="text-sm ">
            <p className="w-[450px] text-gray-500">Curated tools,technologies,and resources for developers building modern software.</p>
<ul className="flex gap-5 my-6">
    <li ><a href="" className="hover:text-pink-500 font-bold text-gray-700">GitHub</a></li>
    <li className="text-bold"><a href="" className="hover:text-pink-500 font-bold text-gray-700">Twitter</a></li>
    <li className="text-bold"><a href="" className="hover:text-pink-500 font-bold text-gray-700">LinkedIn</a></li>
</ul>
        </div>
        </div>
        <div className="flex gap-25  items-center">
           <div className="">
            <h4 className="font-bold">Product</h4>
                <ul>
                    <li className="text-sm"> <a href="" className="hover:text-pink-500 text-gray-500">Home</a></li>
                    <li className="text-sm"><a href="" className="hover:text-pink-500 text-gray-500">Technologies</a></li>
                    <li className="text-sm"><a href="" className="hover:text-pink-500 text-gray-500">Projects</a></li>
                </ul>
                </div>
                <div className=""> 
                <h4 className="font-bold">Company</h4>
                <ul>
                    <li className="text-sm"> <a href="" className="hover:text-pink-500 text-gray-500">About</a></li>
                    <li className="text-sm"><a href="" className="hover:text-pink-500 text-gray-500">Contact</a></li>
                    <li className="text-sm"><a href="" className="hover:text-pink-500 text-gray-500">Career</a></li>
                </ul>
                </div>
                <div className="">
                <h4 className="font-bold">Legal</h4>
                <ul>
                    <li className="text-sm"><a href="" className="hover:text-pink-500 text-gray-500">Privacy Policy</a></li>
                    <li className="text-sm"><a href="" className="hover:text-pink-500 text-gray-500">Terms of Service</a></li>
                   
                </ul>
               
            </div>
        </div>
        </div>
        <hr className="w-4/5 mx-auto border-gray-300" />
        <div className="flex justify-between items-center p-7">
            <p className="text-gray-500">&copy;2026DevStack.All rights reserved</p>
            <ul className="pr-15 flex gap-10">
                <li className="text-gray-500">Privacy</li>
                <li className="text-gray-500">Terms</li>
            </ul>
        </div>
        </div>

    );
};

export default footer;