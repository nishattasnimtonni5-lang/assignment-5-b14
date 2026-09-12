
import { use, useState } from 'react';
import type { Icards } from './../../types/CardsType';
import Selected from './Selected';
import CancelIcon from '@iconify-react/fluent-mdl2/cancel';
import { toast } from 'react-toastify';


interface CardsPromise{
cardsPromise:Promise<Icards[]>
}

const Cards = ({cardsPromise}:CardsPromise) => {
    const cards=use(cardsPromise)
const [selectedCards,setSelectedCards]=useState<Icards[]>([])
    return (
   
         <div className="grid grid-cols-12 gap-2 py-6 items-start pl-4">
             <div className="grid gap-2 sm:grid-cols-2  md:grid-cols-3 col-span-9 ">
         {cards.map((card:Icards,ind:number)=>{
            return(
        <Selected key={ind}
         card={card}
        isSelected={selectedCards.some((item)=>item.name===card.name)}
        onSelect={(card)=>{
            setSelectedCards([...selectedCards,card])
        }

        } />
            )})}
       </div>
         <div className="col-span-3 border border-slate-300 shadow-sm rounded-md flex flex-col items-center ">
<h1 className="font-bold py-4">Your Stack</h1>
{selectedCards.length===0?(
    <p className="text-gray-500">No technologies selected yet</p>)
       : <h3>{selectedCards.length}{" "}
            {selectedCards.length===1?  "technology":"technologies"}{" "}
          selected</h3>}
        {selectedCards.map((card,index)=>
        (
            <div 
            key={index} className=" flex justify-between items-center border rounded-md w-50 p-3  mb-2 shadow-sm bg-white transition-all duration-200 hover:scale-105 ">
         <div className=" flex items-center">
                <img src={card.icon} alt="card.name" className="w-6 h-6" />
                   
           
                <span>{card.name}</span></div> 
               <button
               onClick={()=>{
                setSelectedCards(
                    selectedCards.filter((item)=>item.name!==card.name)
                );
             
               }}
                className="px-0.5 hover:text-red-600 "> <CancelIcon height="1em" /></button>
           
            </div>
            
        )
      
        )}
       
        {selectedCards.length>0?(
         <button
         onClick={()=>{setSelectedCards([]);
         toast.info("All technologies removed succesfully!");}
         }
         className="border-2 border-red-600 rounded-md py-1 px-16 mt-4 mb-4 text-red-500 font-bold hover:bg-red-500 hover:text-white"
         >Remove All</button>):(<button className="text-gray-500 border border-dotted border-gray-500 rounded-md mb-4 mt-3 py-4 px-7">Your stack is empty</button>
        )}

        </div>
       
       </div>
    );
};

export default Cards;