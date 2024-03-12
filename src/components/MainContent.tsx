import React from 'react';
import { repository } from '@/data';

const MainContent = () => {
    return (
        <main className="flex-grow px-4 md:px-0 md:ml-64 pt-4">
            <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="mb-6 text-3xl">GitHub Repository <span className="text-blue-600">facebook/react</span></h1>
                {repository.map((repo, index) => (
                    <article key={index} className="mb-5 prose lg:prose-xl">
                        <h1 className="text-2xl text-gray-900 mb-3 gap-x-2"># {repo.title}</h1>
                        <section>
                            <p>{repo.content}</p>
                        </section>
                    </article>
                ))}
            </div>
        </main>
    );
};

export default MainContent;