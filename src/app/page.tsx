import React from 'react';
import LeftSidebar from "../components/LeftSidebar";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";
import TopNavigation from "@/components/TopNavigation";

const HomePage = () => {
 return (
     <div className="flex flex-col min-h-screen">
         <TopNavigation/>
         <div className="flex flex-1 pt-14 px-8 justify-between">
             <div className="hidden md:block">
                 <LeftSidebar/>
             </div>
             <MainContent/>
             <div className="hidden lg:block">
                 <RightSidebar/>
             </div>
         </div>
     </div>
 );
};

export default HomePage;