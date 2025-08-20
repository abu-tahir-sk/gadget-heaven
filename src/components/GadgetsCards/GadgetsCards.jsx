import { useEffect, useState } from "react";
import GadgetCard from "../GadgetCard/GadgetCard";

const GadgetsCards = () => {
      const [gadgets, setGadgets] = useState([]);

      useEffect(() => {
            fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
      },[])
      return (
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {
                  gadgets.map(gadget => <GadgetCard key={gadget.product_id} gadget={gadget}></GadgetCard>)
                 }
            </div>
      );
};

export default GadgetsCards;