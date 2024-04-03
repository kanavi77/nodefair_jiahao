import React from 'react';
import {Input, Checkbox, Radio, Space} from 'antd';
import  { useState, useEffect } from 'react';
import {useStore} from "../../store";

const FilterSection = ({ title, placeholder, options }) => {
    const [showScrollbar, setShowScrollbar] = useState(false);
    const selectedCompanies = useStore((state) => state.selectedCompanies);
    const setSelectedCompanies = useStore((state) => state.setSelectedCompanies);

    useEffect(() => {
        setShowScrollbar(options.length > 4);
    }, [options]);

    const handleCheckboxChange = (checkedValues) => {
        setSelectedCompanies(checkedValues);
    };

    return (
        <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <div className="relative">
                <Input
                    placeholder={placeholder}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <div
                className={`mt-4 overflow-y-auto ${
                    showScrollbar ? 'max-h-40' : ''
                }`}
            >
                <Checkbox.Group value={selectedCompanies} onChange={handleCheckboxChange}>
                    <div className="flex flex-col">
                        {options.map((option, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <Checkbox value={option} className="text-green-500" />
                                <label className="ml-2 text-gray-700">{option}</label>
                            </div>
                        ))}
                    </div>
                </Checkbox.Group>
            </div>
        </div>
    );
};





const QuestionTypeFilter = () => {
    const questionTypes = ['All Types', 'Background', 'Situational', 'Technical'];

    return (
        <div className="mt-4 question-type-filter">
            <h2 className="text-lg font-bold mb-2">Question Type</h2>
            <div className="question-type-filter__options">
                <Radio.Group defaultValue="all types">
                    <Space direction="vertical">
                        {questionTypes.map((type, index) => (
                            <Radio value={type.toLowerCase() } >{type}</Radio>

                        ))}
                    </Space>
                </Radio.Group>
            </div>

        </div>
    );
};

const Filters = () => {
    const companyOptions = [
        "Luxoft",
        "Mastercard",
        "Equinix",
        "IBM",
        "Canonical",
        "Ubisoft",
        "ShopBack",
        "Apple"
    ];
    const jobTitleOptions = ['Algorithm Engineer', 'Product Manager', 'Software Engineer', 'Data Scientist','Cybersecurity Engineer','Data Analyst'];


    return (
        <div className="lg:col-span-1">
            <FilterSection
                title="Company"
                placeholder="e.g. Google, Meta, Micros"
                options={companyOptions}
            />
            <FilterSection
                title="Job Title"
                placeholder="e.g. Blockchain, Product"
                options={jobTitleOptions}
            />
            <QuestionTypeFilter/>
        </div>
    );
};

export default Filters;
