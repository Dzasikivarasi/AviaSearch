import React, { useState } from "react"
import Filter from "./Filter.tsx"
import { COMPANIES } from "../data.js"
import { FiltersType } from "../types.ts";
import { FILTERS_TRANSFERS, TransferFilters } from "../const.js";

type FiltersMobileProps = {
    selectedTransfers: string[];
    setSelectedTransfers: (selected: string[]) => void;
    selectedCompanies: string[];
    setSelectedCompanies: (selected: string[]) => void;
};

export default function FiltersMobile({ selectedTransfers, setSelectedTransfers, selectedCompanies, setSelectedCompanies }: FiltersMobileProps): JSX.Element {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const companies: FiltersType = COMPANIES.map(company => company.name);

    const handleTransfersChange = (selected: string[]) => {
        setSelectedTransfers(selected);
    };

    const handleCompaniesChange = (selected: string[]) => {
        setSelectedCompanies(selected);
    };

    const iconCkickHandler = () => {
        setIsMenuOpened(prev => !prev);
    }

    return (

        <div className="filters__dropdown">
            <div className={`filters__dropdown-menu ${isMenuOpened? 'opened' : ''}`}>
                <p className="filters__dropdown-menu-settings">
                    {selectedCompanies.length === 0 ? "Любая авиакомпания, " : (
                        <>
                            {selectedCompanies.length > 0 && `${selectedCompanies.join(", ")},`}
                        </>
                    )}

                    {selectedTransfers.length === 0 ? "любое количество пересадок" : (
                        <>
                            {selectedTransfers.length > 0 && ` пересадки: ${selectedTransfers.map(transfer => TransferFilters[transfer] !== null ? TransferFilters[transfer] : 0).join(", ")}`}
                        </>
                    )}
                </p>
                <div className="filters__dropdown-menu-open">
                    {isMenuOpened ? <p>Скрыть настройки</p> : <p>Открыть настройки</p>}
                    <img
                        className={`filters__dropdown-menu-open-arrow ${isMenuOpened? 'opened' : ''}`}
                        src="img/dropdown-arrow-down.svg"
                        alt="open settings"
                        onClick={iconCkickHandler} />
                </div>
            </div>
            <div className={`filters__dropdown-positions ${!isMenuOpened? 'invisible' : ''}`}>
                <Filter
                    name={'Компании'}
                    className={'filters__dropdown-company'}
                    data={companies}
                    selected={selectedCompanies}
                    onChange={handleCompaniesChange} />
                <Filter
                    name={'Количество пересадок'}
                    className={'filters__dropdown-transfer'}
                    data={FILTERS_TRANSFERS}
                    selected={selectedTransfers}
                    onChange={handleTransfersChange} />
            </div>
        </div>
    )
};
