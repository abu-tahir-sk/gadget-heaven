import { TabTitle } from "../../utilites/gadgetTitle";

const Statistics = () => {
  TabTitle("Contact - Gadgetes Heaven");
  return (
    <>
      <div className="bg-purple-900 min-h-60 flex flex-col items-center justify-center">
        <h3 className="font-bold text-3xl text-center text-white">
          Contact Us
        </h3>
        <p className="text-center text-white py-3 md:px-64">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-10/12 md:w-7/12 mx-auto flex flex-col">
  <div className="grid grid-cols-2 items-center justify-center gap-4 py-4">
   
    
      <label className="input w-full input-bordered border-2 border-gray-400 flex items-center gap-2">
      <input type="name" className="grow" placeholder="Your Name" />
      
        
    </label>

    <label className="input w-full input-bordered border-2 border-gray-400 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="text" className="grow" placeholder="Email" />
    </label>
    

   
    <label className="col-span-2 w-full border-2 border-gray-400 flex items-center gap-2 input input-bordered input-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="Number" className="grow" placeholder="Phone Number" />
    </label>

    <textarea
      className="textarea border-2 border-gray-400 textarea-bordered w-full col-span-2"
      placeholder="Messages"
    ></textarea>
  </div>
</div>
    </>
  );
};

export default Statistics;
