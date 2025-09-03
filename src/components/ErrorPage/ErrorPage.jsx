import { TabTitle } from "../../utilites/gadgetTitle";

import { Link } from "react-router-dom";
const ErrorPage = () => {
        TabTitle('Error - Gadgetes Heaven')
      return (
            <div className="w-full h-lvh bg-purple-300">
                 <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
                  <h1 className="font-extrabold text-7xl text-center py-4"><span>O</span>ops!</h1>
                 <h3 className="font-bold text-3xl text-center pb-4">Something went wrong!</h3>
                 <h4 className="text-2xl font-bold text-center">404 - PAGE NOT FOUND</h4>
                 <div className="flex items-center justify-center py-2">
                  <button className="font-bold bg-purple-700 text-white px-4 py-2 rounded-sm">
                  <Link to="/">Go To Home</Link>
                  </button>
                 </div>
                 </div>
            </div>
      );
};

export default ErrorPage;