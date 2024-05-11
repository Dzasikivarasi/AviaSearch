import React, { useEffect, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery.ts"
import FiltersDesktop from "./Filters-desktop.tsx";
import FiltersMobile from "./Filters-mobile.tsx";
import Sorting from "./Sorting.tsx";
import Ticket from "./Ticket.tsx";
import LoadButton from "./Load-button.tsx";
import { EMPTY_MESSAGE, TICKETS_PER_CLICK } from "../const.js";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import { applyFilters, updateTicketsSorting } from "../app/dataSlice.ts";

export default function Main(): JSX.Element {
    const isDesktop: boolean = useMediaQuery('(min-width: 900px)');
    const [visibleTickets, setVisibleTickets] = useState<number>(3);
    const [selectedTransfers, setSelectedTransfers] = useState<string[]>([]);
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
    const mockTickets = useSelector((state: RootState) => state.tickets.mockTickets);
    const sortedTickets = useSelector((state: RootState) => state.tickets.sortedTickets);
    const activeSort = useSelector((state: RootState) => state.tickets.activeSort);
    const dispatch = useDispatch();

    const onButtonClick = (): void => {
        setVisibleTickets(prevVisibleTickets => prevVisibleTickets + TICKETS_PER_CLICK);
    }

    const isAllTicketsDisplayed = visibleTickets >= mockTickets.length;

    useEffect(() => {
        dispatch(applyFilters({ selectedTransfers, selectedCompanies }));
        dispatch(updateTicketsSorting({ activeSort }));
    }, [selectedTransfers, selectedCompanies, dispatch, activeSort]);

    return (
        <div className="main">
            {isDesktop && <FiltersDesktop
                selectedTransfers={selectedTransfers}
                setSelectedTransfers={setSelectedTransfers}
                selectedCompanies={selectedCompanies}
                setSelectedCompanies={setSelectedCompanies}
            />}

            <div className="tickets">
                <Sorting />
                {!isDesktop && <FiltersMobile
                    selectedTransfers={selectedTransfers}
                    setSelectedTransfers={setSelectedTransfers}
                    selectedCompanies={selectedCompanies}
                    setSelectedCompanies={setSelectedCompanies}
                />}
                <div className="tickets__result">
                    <ul className="tickets__result-list">
                        {sortedTickets.length === 0
                            ? <p className="tickets__result-list-empty">{EMPTY_MESSAGE}</p>
                            : sortedTickets.slice(0, visibleTickets).map((item) => (
                                <Ticket item={item} key={item.id} />))}
                    </ul>
                </div>
                <LoadButton onButtonClick={onButtonClick} disabled={isAllTicketsDisplayed} />
            </div>
        </div >
    )
};
