import React from "react"
import Filter from "./Filter.tsx";
import { COMPANIES } from "../data.js"
import { FiltersType } from "../types.ts";
import { FILTERS_TRANSFERS } from "../const.js";

type FiltersDesktopProps = {
    selectedTransfers: string[];
    setSelectedTransfers: (selected: string[]) => void;
    selectedCompanies: string[];
    setSelectedCompanies: (selected: string[]) => void;
};

export default function FiltersDesktop({ selectedTransfers, setSelectedTransfers, selectedCompanies, setSelectedCompanies }: FiltersDesktopProps): JSX.Element {
    const companies: FiltersType = COMPANIES.map(company => company.name);

    const handleTransfersChange = (selected: string[]) => {
        setSelectedTransfers(selected);
    };

    const handleCompaniesChange = (selected: string[]) => {
        setSelectedCompanies(selected);
    };

    return (
        <div className="filters">
            <Filter
                name={'Количество пересадок'}
                className={'filters__transfer'}
                data={FILTERS_TRANSFERS}
                selected={selectedTransfers}
                onChange={handleTransfersChange} />

            <Filter
                name={'Компании'}
                className={'filters__company'}
                data={companies}
                selected={selectedCompanies}
                onChange={handleCompaniesChange} />
        </div>
    )
};
