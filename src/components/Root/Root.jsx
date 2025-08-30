import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { TabTitle } from "../../utilites/gadgetTitle";



const Root = () => {
       TabTitle('Gadgetes Heaven')
      return (
            <div className="">
                 
      <div className="h-16">
                   <NavBar></NavBar>
                 </div>
                 <div className="min-h-[calc(100vh-285px)]">
                  <Outlet></Outlet>
                 </div>
                  <Footer></Footer>
    
            </div>
      );
};

export default Root;