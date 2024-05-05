import React from "react"
import Filter from "./Filter.tsx"
import { FILTERS_TRANSFERS, COMPANIES } from "../data.js"
import { FiltersType } from "../types.ts";

export default function FiltersMobile(): JSX.Element {
    const companies: FiltersType = COMPANIES.map(company => company.name);

    return (

        <div className="filters__dropdown">
            <div className="filters__dropdown-menu opened">
                <p className="filters__dropdown-menu-settings">Любая авиакомпания, любое кол-во пересадок</p>
                <div className="filters__dropdown-menu-open">
                    <p>Открыть настройки</p>
                    <img className="filters__dropdown-menu-open-arrow opened" src="img/dropdown-arrow-down.svg" alt="open settings"/>
                </div>
            </div>
            <div className="filters__dropdown-positions">
                <Filter
                    name={'Компании'}
                    className={'filters__dropdown-company'}
                    data={companies} />
                <Filter
                    name={'Количество пересадок'}
                    className={'filters__dropdown-transfer'}
                    data={FILTERS_TRANSFERS} />
            </div>
        </div>
    )
};
