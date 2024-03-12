import React from 'react';
import { navigationItems } from '@/data'; // You might need to adjust the import based on your actual data file location
import Image from 'next/image';
import {LogOut, Menu, User} from "lucide-react";

const TopNavigation = () => {
    return (
        <header className="bg-gray-200 px-4 py-3 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="flex items-center justify-center space-x-16">
                    <div className="flex items-center space-x-4">
                        <Image src="/github.png" alt="GitHub logo" width={40} height={40}/>
                    </div>

                    <nav className="hidden md:flex space-x-4">
                        {navigationItems.map((item, index) => (
                            <a key={index} href="#"
                               className="text-gray-600 hover:text-gray-900 hover:border-b-4 border-gray-500">
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>


                <div className="flex items-center space-x-10">
                    <div className="flex items-center space-x-1">
                        <User/>
                        <span className="hidden lg:block">Ilkin Sadigzade 550951</span>
                    </div>

                    <div className="md:flex hidden items-center space-x-1">
                        <LogOut/>
                        <span className="hidden lg:block">Log Out</span>
                    </div>

                    <div className="md:hidden">
                        <Menu/>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default TopNavigation;