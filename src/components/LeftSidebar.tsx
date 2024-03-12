import React from 'react';
import { sidebarItems } from '@/data';

const LeftSidebar = () => {
    return (
        <aside className="bg-gray-400 w-64 h-full max-h-[580px] overflow-y-auto scrollbar-hide hidden md:block fixed rounded-xl mt-8">
            <div className="p-4">
                {sidebarItems.map((section, index) => (
                    <div key={index} className="pb-4">
                        <h2 className="pb-2 text-xl">{section.title}</h2>
                        <ul>
                            {section.items.map((item, index) => (
                                <li key={index} className="pb-2">
                                    <a href="#" className="p-2 hover:bg-gray-500 rounded">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default LeftSidebar;