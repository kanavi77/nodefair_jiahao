import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import QuestionList from './components/QuestionList';
import NavLinks from "./components/NavLinks";
const App = () => {
    return (
        <div className="bg-white">
            <div>
                <Navbar />
                <NavLinks />
            </div>
            <Hero />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <Filters />
                    <QuestionList />
                </div>
            </div>
        </div>
    );
};

export default App;
