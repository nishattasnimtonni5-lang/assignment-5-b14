
import banner from "../assets/banner-stack.png"
const Banner = () => {
    return (<div>
        <div className="flex items-center pt-10 flex-col md:flex-row">
        <div  >
            <div className="pl-7 pb-10    ">
                <h1 className="text-6xl font-bold ">Build Your Ideal <span className="bg-linear-to-r from-orange-600 via-pink-500 to-violet-500 bg-clip-text text-transparent"> Develpment Stack </span></h1>
          <p className="text-gray-500 pt-4 text-sm pr-50px ">Explore fronted,backend,database,and tooling options,    
           compare them side by side,and put together the stack that fits your next project. </p>
           </div> 
            <div className="flex gap-4 pl-7   ">
            <button className="bg-linear-to-r from-orange-400 to-pink-500 text-white font-bold border border-pink-500 hover:bg-none hover:bg-amber-50 hover:text-pink-500  rounded-md py-3 px-3 ">Explore Technologies</button>
            <button className="rounded-md py-3 px-13 border border-gray-400 text-gray-500 font-bold hover:bg-gray-500 hover:text-white">Learn More</button>
        
          </div>
          </div>
        
            <img src={banner} alt="Banner" className="md:w-100 w-full"/>
            </div>
              
           
             <div className="pl-5 pt-15 pb-5">
              <h1 className="text-3xl font-bold">Explore the <span className="text-pink-500">Technologies</span></h1>
             <p className="text-gray-500 pt-2 text-sm">Pick one technology per category to build your ideal stack</p>
        </div>
    
     </div>
    );
};

export default Banner;