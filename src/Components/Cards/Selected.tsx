
import StarFilledIcon from '@iconify-react/ant-design/star-filled';
import type { Icards } from './../../types/CardsType';
 import {  toast } from 'react-toastify';
const Selected = ({card,onSelect,isSelected}:{card:Icards;
    onSelect:(card:Icards)=>void;
    isSelected:boolean;
    })=>{


    
    return (
       
               
          <div  className="border border-gray-300 rounded-md   mb-5  shadow-sm py-6 px-5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between">
             <img src={card.icon} alt="icon" className="w-8 h-8" />
               <h4 className={`border rounded-md px-2 my-1 text-blue-400 bg-blue-50 font-medium
               ${
               card.badge==="Modern" || card.badge=== "Versatile" || card.badge=== "Standard" ? "border-green-400 bg-green-100 text-green-500 " : card.badge==="Cache" || card.badge==="Fast"?"border-red-200 bg-red-100 text-red-500"
               :card.badge==="Top SQL" || card.badge=== "Popular" || card.badge==="Essential" || card.badge==="Robust" || card.badge=== "Containers" ? "border-blue-200 bg-blue-100" :
               card.badge==="SSR/Edge" ? "border-violet-700 bg-violet-200 text-violet-500"
            :"border-yellow-400 bg-yellow-100 text-yellow-400"
               }
               `}>{card.badge}</h4>
               </div>
                <h1 className="font-extrabold">{card.name}</h1>
           <p className="mb-0 text-gray-500 pb-5 ">{card.description}</p>
          <div className="flex justify-between items-center gap-2 pb-4">
          <div className="border flex items-center rounded-md px-1 py-1 text-sm text-gray-500 bg-gray-200"> <h5>{card.category}</h5></div>
           <h4 className="text-gray-500 text-sm">{card.difficulty}</h4>
          <div className="flex items-center">
             <StarFilledIcon height="1em" style={{ color: '#ffda01' }} />
           <h4>{card.rating}</h4>
           </div>
           </div>
           <div className="flex justify-center items-center py-3">
           <button 
           disabled={isSelected}
           onClick={()=>{
            onSelect(card);
            toast.success(`${card.name} added to your stack!`);
           }
           }
            className={`font-bold  text-gray-300 px-12 py-3 rounded-4xl    disabled:cursor-not-allowed 
            ${
                isSelected?"bg-pink-100 text-pink-500 ":"bg-[#0F172A] text-white"
            }`}>
                {isSelected === true?"Selected" :"Add to Stack"}</button>
            </div>
            </div>

       
      
        
       
    );
};

export default Selected;