// In src/components/RightSidebar.tsx

import React from 'react';
import { repository } from '@/data';

const RightSidebar = () => {
    return (
        <aside className="bg-white border-l border-gray-300 w-64 h-screen sticky top-16 right-0 overflow-y-auto hidden lg:block p-2.5">
            <div className="p-4 fixed">
                <h1 className="font-semibold text-xl mb-3">On this page</h1>
                <ul>
                    {repository.map((section, index) => (
                        <li key={index} className="mb-2">
                            <a href={`#${section.title}`} className="text-gray-500 hover:text-blue-500">
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default RightSidebar;