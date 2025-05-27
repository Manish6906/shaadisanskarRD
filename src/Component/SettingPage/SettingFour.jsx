import React, { useState } from 'react';
import {
    Calendar,
    Ruler,
    Globe,
    Heart,
    Users,
    Languages,
    Handshake,
    ChevronDown,
} from 'lucide-react';

function SettingFour() {
    const [expandedItem, setExpandedItem] = useState(null);
    const [age, setAge] = useState({ min: 18, max: 30 });
    const [height, setHeight] = useState({ min: 150, max: 180 });
    const [county, setCounty] = useState([]);
    const [religion, setReligion] = useState([]);
    const [community, setCommunity] = useState([]);
    const [motherTongue, setMotherTongue] = useState([]);
    const [maritalStatus, setMaritalStatus] = useState([]);

    const items = [
        {
            label: 'Age',
            value: `${age.min} to ${age.max}`,
            icon: <Calendar className="w-5 h-5 text-orange-500" />,
            type: 'range',
            rangeType: 'age',
        },
        {
            label: 'Height',
            value: `${height.min} to ${height.max}`,
            icon: <Ruler className="w-5 h-5 text-orange-500" />,
            type: 'range',
            rangeType: 'height',
        },
        {
            label: 'County',
            value: county,
            icon: <Globe className="w-5 h-5 text-orange-500" />,
            type: 'multipleSelect',
            options: ['Open to all', 'India', 'USA', 'UK', 'Canada', 'Australia', 'Germany'],
        },
        {
            label: 'Religion',
            value: religion,
            icon: <Heart className="w-5 h-5 text-orange-500" />,
            type: 'multipleSelect',
            options: ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Atheist'],
        },
        {
            label: 'Community',
            value: community,
            icon: <Users className="w-5 h-5 text-orange-500" />,
            type: 'multipleSelect',
            options: ['Open to all', 'General', 'OBC', 'SC', 'ST', 'EWS'],
        },
        {
            label: 'Mother Tongue',
            value: motherTongue,
            icon: <Languages className="w-5 h-5 text-orange-500" />,
            type: 'multipleSelect',
            options: ['Open to all', 'Hindi', 'English', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Gujarati'],
        },
        {
            label: 'Marital Status',
            value: maritalStatus,
            icon: <Handshake className="w-5 h-5 text-orange-500" />,
            type: 'multipleSelect',
            options: ['Never Married', 'Divorced', 'Widowed', 'Separated', 'Engaged', 'In a Relationship'],
        },
    ];

    const handleToggle = (idx) => {
        setExpandedItem(expandedItem === idx ? null : idx);
    };

    const handleMultiSelect = (field, value) => {
        const fieldSetters = {
            County: setCounty,
            Religion: setReligion,
            Community: setCommunity,
            'Mother Tongue': setMotherTongue,
            'Marital Status': setMaritalStatus,
        };

        const setField = fieldSetters[field];
        if (!setField) return;

        setField((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="bg-gray-50 jost p-5">
            <h1 className="text-black text-2xl font-semibold mb-2 ml-1">Contact Filters</h1>

            <div className="py-3">
                <div className="bg-[#FFE7D6] text-black p-6 rounded-md shadow-sm space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="md:flex justify-between items-center mb-4">
                            <div className="flex flex-col gap-1 text-sm text-black">
                                <h1 className="text-xl font-bold">Who can contact me?</h1>
                                <p className="mb-2">Only Members matching the below criteria will get to see your contact details.</p>
                                <p className="mb-4">Tap on the field to edit</p>
                            </div>
                        </div>

                        {items.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-500 rounded-md px-3 py-2 pb-4">
                                <div
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-black mt-1 cursor-pointer"
                                    onClick={() => handleToggle(idx)}
                                >
                                    <div className="flex items-center gap-2 w-full sm:w-1/7">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                                            {item.icon}
                                        </div>
                                        <h2 className="text-lg font-semibold">{item.label}</h2>
                                    </div>

                                    <p className="sm:text-center w-full sm:w-1/3">
                                        {Array.isArray(item.value) ? item.value.join(', ') : item.value}
                                    </p>

                                    <ChevronDown
                                        className={`w-4 h-4 text-black transform transition-transform duration-300 ${expandedItem === idx ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                {expandedItem === idx && item.type === 'range' && (
                                    <div className="mt-4 space-y-2">
                                        <label className="block text-sm text-black">Select {item.label} Range</label>

                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="flex flex-col w-full md:w-1/2">
                                                <label className="text-xs mb-1">Min</label>
                                                <input
                                                    type="number"
                                                    value={item.rangeType === 'age' ? age.min : height.min}
                                                    min={item.rangeType === 'age' ? 18 : 140}
                                                    max={item.rangeType === 'age' ? (age.max || 100) : (height.max || 220)}
                                                    onChange={(e) => {
                                                        const value = parseInt(e.target.value);
                                                        if (item.rangeType === 'age') {
                                                            setAge((prev) => ({ ...prev, min: value }));
                                                        } else {
                                                            setHeight((prev) => ({ ...prev, min: value }));
                                                        }
                                                    }}
                                                    className="p-2 border rounded"
                                                />
                                            </div>

                                            <div className="flex flex-col w-full md:w-1/2">
                                                <label className="text-xs mb-1">Max</label>
                                                <input
                                                    type="number"
                                                    value={item.rangeType === 'age' ? age.max : height.max}
                                                    min={item.rangeType === 'age' ? (age.min || 18) : (height.min || 140)}
                                                    max={item.rangeType === 'age' ? 100 : 220}
                                                    onChange={(e) => {
                                                        const value = parseInt(e.target.value);
                                                        if (item.rangeType === 'age') {
                                                            setAge((prev) => ({ ...prev, max: value }));
                                                        } else {
                                                            setHeight((prev) => ({ ...prev, max: value }));
                                                        }
                                                    }}
                                                    className="p-2 border rounded"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {expandedItem === idx && item.type === 'multipleSelect' && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {item.options.map((option, i) => (
                                            <button
                                                key={i}
                                                className={`px-3 py-1 rounded-full border ${
                                                    item.value.includes(option)
                                                        ? 'bg-orange-500 text-white border-orange-500'
                                                        : 'text-black border-gray-400'
                                                }`}
                                                onClick={() => handleMultiSelect(item.label, option)}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingFour;
