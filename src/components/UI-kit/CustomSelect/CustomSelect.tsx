import React, { useState } from 'react';
import './CustomSelect.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

type CustomSelectProps = {
    options: { value: string; label: string }[];
    placeholder: string;
    onChange: (values: string[]) => void;
}

export function CustomSelect({ options, placeholder, onChange }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    const handleOptionClick = (value: string) => {
        const newSelectedOptions = selectedOptions.includes(value)
            ? selectedOptions.filter(opt => opt !== value)
            : [...selectedOptions, value];

        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions);
    };

    return (
        <div className="custom-select">
            <div className="select-header" onClick={() => setIsOpen(!isOpen)}>
                <span
                    className={`placeholder ${isOpen ? 'open' : ''}`}
                    style={{color: isDarkTheme ? '#F5F5F5' : undefined }}
                >
                    {placeholder}
                </span>
                <img
                    src={`/assets/${isOpen ? 'arrow-up.svg' : 'arrow-down.svg'}`}
                    alt="arrow"
                    className="arrow"
                />
            </div>
            {isOpen && (
                <ul
                    className="select-options"
                    style={{background: isDarkTheme ? '#292929' : undefined }}
                >
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={`select-option ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            <span className="option-label">{option.label}</span>
                            <img
                                src={`/assets/${selectedOptions.includes(option.value) ? 'active-checkbox.svg' : 'inactive-checkbox.svg'}`}
                                alt="checkbox"
                                className="checkbox"
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
