import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery.ts"
import FiltersDesktop from "./Filters-desktop.tsx";
import FiltersMobile from "./Filters-mobile.tsx";
import Sorting from "./Sorting.tsx";
import { TICKETS, TICKETS_PER_CLICK } from "../data.js";
import Ticket from "./Ticket.tsx";
import LoadButton from "./Load-button.tsx";
import { TicketType } from "../types.ts";

export default function Main(): JSX.Element {
    const isDesktop: boolean = useMediaQuery('(min-width: 900px)');
    const [visibleTickets, setVisibleTickets] = useState<number>(3);
    const [sortedTickets, setSortedTickets] = useState<TicketType[]>(TICKETS);
    const [selectedTransfers, setSelectedTransfers] = useState<string[]>([]);
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

    const onButtonClick = () => {
        setVisibleTickets(prevVisibleTickets => prevVisibleTickets + TICKETS_PER_CLICK);
    }

    const isAllTicketsDisplayed = visibleTickets >= TICKETS.length;

    const updateTickets = (sortedTickets) => {
        setSortedTickets(sortedTickets);
    }

        const applyFilters = () => {
            let filteredTickets = TICKETS;

            if (selectedTransfers.length > 0) {
                filteredTickets = filteredTickets.filter(ticket => {
                    if (selectedTransfers.includes("Без пересадок")) {
                        return ticket.connectionAmount === null;
                    } else if (selectedTransfers.includes("1 пересадка")) {
                        return ticket.connectionAmount === 1;
                    } else if (selectedTransfers.includes("2 пересадки")) {
                        return ticket.connectionAmount === 2;
                    } else if (selectedTransfers.includes("3 пересадки")) {
                        return ticket.connectionAmount === 3;
                    } else if (selectedTransfers.includes("4 пересадки")) {
                        return ticket.connectionAmount === 4;
                    }
                    return true;
                });
            }

            if (selectedCompanies.length > 0) {
                filteredTickets = filteredTickets.filter(ticket => selectedCompanies.includes(ticket.company));
            }
            
            setSortedTickets(filteredTickets);
            console.log(filteredTickets);
        };

    return (
        <div className="main">
            {isDesktop && <FiltersDesktop
                selectedTransfers={selectedTransfers}
                setSelectedTransfers={setSelectedTransfers}
                selectedCompanies={selectedCompanies}
                setSelectedCompanies={setSelectedCompanies}
                applyFilters={applyFilters}
            />}

            <div className="tickets">
                <Sorting updateTickets={updateTickets} />
                {!isDesktop && <FiltersMobile />}
                <div className="tickets__result">
                    <ul className="tickets__result-list">
                        {sortedTickets.slice(0, visibleTickets).map((item) => (
                            <Ticket item={item} key={item.id} />))}
                    </ul>
                </div>
                <LoadButton onButtonClick={onButtonClick} disabled={isAllTicketsDisplayed} />
            </div>
        </div >
    )
};
