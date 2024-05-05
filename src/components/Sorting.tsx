import React, { useState } from "react"
import { SORTING, TICKETS } from "../data"
import { TicketType } from "../types";

type SortingProps = {
    updateTickets: (sortedTickets: TicketType[]) => void;
}

export default function Sorting({ updateTickets}: SortingProps): JSX.Element {
    const [activeSort, setActiveSort] = useState<string|null>(null);

    function sortTickets(index: number): void {
        const sortedTickets = [...TICKETS];
        const compare = (a: any, b: any) => {
          switch (index) {
            case 0:
              return a.price - b.price;
            case 1:
              return a.duration - b.duration;
            case 2:
              return (a.connectionAmount || 0) - (b.connectionAmount || 0);
            default:
              return 0;
          }
        };
        sortedTickets.sort(compare);
        updateTickets(sortedTickets);
      }

    const onSortButtonClick = (index: number) => {
        setActiveSort(SORTING[index]);
        sortTickets(index)
    }

    return (
        <ul className="tickets__sorting">
            {SORTING.map((item, index) => (
                <li
                    key={index}
                    className={`tickets__sorting-item ${activeSort === item ? 'active' : ''}`}
                    onClick={() => onSortButtonClick(index)}>{item}</li>
            ))}
        </ul>
    )
};
