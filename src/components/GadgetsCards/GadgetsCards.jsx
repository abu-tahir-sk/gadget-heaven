
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../GadgetCard/GadgetCard";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";

const GadgetsCards = () => {
    
      const { category} = useParams();
      const gadgets = useLoaderData();
      const [gadgetss, setGadgetss] =  useState([]);
      useEffect(() =>{
           if(category){
             const filterByCategory = [...gadgets].filter(gadget => gadget.category === category)
                  
                   if(filterByCategory.length === 0){
                        return <ErrorPage></ErrorPage>;
                   }
                   else{
                        setGadgetss(filterByCategory)
                   }
           }
           else{
            setGadgetss(gadgets)
           }
      },[category,gadgets])
     
      
      return (
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {
                 gadgetss.map(gadget => <GadgetCard key={gadget.product_id} gadget={gadget}></GadgetCard>) 
                 }
            </div>
      );
};

export default GadgetsCards;