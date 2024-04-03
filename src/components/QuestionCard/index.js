import React from 'react';
import './index.css'


const QuestionCard = ({ companyName, roleName, question, date, questionType,logo}) => {

    return (
        <div className="border border-gray-300 mb-4 rounded-lg h-106 transition-all duration-300 hover:shadow-lg">
            <div className=" shadow-md pr-8 pl-4 pt-4 pb-2" hoverable>
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt={`${companyName} logo`}
                        className="w-4 h-4 rounded mr-2"
                    />
                    <span>{companyName}</span>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md ml-auto">
                        {questionType}
                    </div>
                </div>
                <p className="text-gray-600 mb-2">{roleName}</p>
                <div className="flex justify-between items-center mb-4">
                    <a
                        href="#"
                        className="text-gray-800 hover:text-green-600"
                    >
                        <p>{question}</p>
                    </a>
                    <div className="btn-0-2-89">
                        <img className="icon-0-2-90"
                             src="2.svg"
                             alt="magic star icon"/>
                        <div className="text-0-2-91">Generate Answer</div>
                    </div>
                </div>
            </div>
            <div className="footer-0-2-66 pr-8 pl-4 h-12 flex items-center">
                <p className="text-gray-500 text-sm flex-1">{date}</p>
                <a href="#" className="text-gray-600 hover:text-green-500 flex items-center">
                    Share
                    <img src="3.svg"
                         alt="share icon"
                         className="icon-0-2-94 ml-2"/>
                </a>
            </div>

        </div>

    );
};

export default QuestionCard;
