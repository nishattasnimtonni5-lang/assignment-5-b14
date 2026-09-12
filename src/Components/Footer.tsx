
import footerImg from "../assets/logo-text.png"
const footer = () => {
    return (<div>
         <hr className=" mx-auto border-gray-300" />
        <div className="flex pl-9 pt-10 gap-10"> 
        <div>
            <img src={footerImg} alt="image" className="my-5 w-30" />
          < div className="text-sm ">
            <p className="max-w-xs text-gray-500 ">Curated tools,technologies,and resources for developers building modern software.</p>
<ul className="flex gap-5 my-6">
    <li ><a href="" className="hover:text-pink-500 font-bold text-gray-700">GitHub</a></li>
    <li className="text-bold"><a href="" className="hover:text-pink-500 font-bold text-gray-700">Twitter</a></li>
    <li className="text-bold"><a href="" className="hover:text-pink-500 font-bold text-gray-700">LinkedIn</a></li>
</ul>
        </div>
        </div>
        <div className="md:flex gap-25 hidden items-center">
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
        <div className="flex flex-row justify-between  items-center gap-8 p-7">
            <p className="text-gray-500 text-xs whitespace-nowrap">&copy;2026DevStack.All rights reserved</p>
            <ul className="pr-15 flex md:gap-10 gap-4 ">
                < li > <a href="" className="hover:text-pink-500 text-gray-500  text-xs">Privacy</a></li>
                <li > <a href="" className="hover:text-pink-500 text-gray-500 text-xs">Terms</a></li>
            </ul>
        </div>
        </div>

    );
};

export default footer;