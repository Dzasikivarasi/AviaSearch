import React, { useEffect } from "react";
import { FiltersType } from "../types";

type FilterProps = {
    name: string;
    className: string;
    data: FiltersType;
    selected: string[] | null;
    onChange: (selected: string[]) => void;
};

export default function Filter({ name, className, data, onChange, selected }: FilterProps): JSX.Element {

    const handleCheckboxChange = (value: string) => {
        if (selected && selected.includes(value)) {
            onChange(selected.filter(item => item !== value));
        } else if (selected) {
            onChange([...selected, value]);
        }
    };

    useEffect(() => {
        console.log("Selected:", selected);
    }, [selected]);

    return (
        <div className={className}>
            <h2>{name}</h2>
            <ul className={`${className}-list`}>
                {data.map((item, index) => (
                    <li key={index} className={`${className}-list-item`}>
                        <input
                            type="checkbox"
                            id={`${className}-checkbox-${index}`}
                            checked={selected ? selected.includes(item) : false}
                            onChange={() => handleCheckboxChange(item)} />
                        <label htmlFor={`${className}-checkbox-${index}`}>{item}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
