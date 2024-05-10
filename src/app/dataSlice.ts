import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TICKETS } from "../data"
import { TicketType } from "../types"
import { TransferFilters } from "../const";

export type InitialStateType = {
    mockTickets: TicketType[];
    sortedTickets: TicketType[];
    activeSort: number | null;
}

const initialState: InitialStateType = {
    mockTickets: TICKETS,
    sortedTickets: TICKETS,
    activeSort: null
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        applyFilters: (state, action: PayloadAction<{ selectedTransfers: string[]; selectedCompanies: string[] }>) => {
            const { selectedTransfers, selectedCompanies } = action.payload;

            let filteredTickets = state.mockTickets;

            filteredTickets = filteredTickets.filter(ticket => {
                const selectedTransfersMatching = selectedTransfers.filter(transfer => TransferFilters[transfer] !== undefined);
                if (selectedTransfersMatching.length > 0) {
                    return selectedTransfersMatching.some(selectedTransfer => ticket.connectionAmount === TransferFilters[selectedTransfer]);
                }
                return true;
            });

            if (selectedCompanies.length > 0) {
                filteredTickets = filteredTickets.filter(ticket => selectedCompanies.includes(ticket.company));
            }
            state.sortedTickets = filteredTickets;
            ticketsSlice.actions.updateTicketsSorting({ activeSort: null });
        },
        updateTicketsSorting: (state, action: PayloadAction<{ activeSort: number | null }>) => {
            const { activeSort } = action.payload;
            const ticketsToSort = state.sortedTickets;
            const compare = (a: any, b: any) => {
                switch (activeSort) {
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
            ticketsToSort.sort(compare);
            state.sortedTickets = ticketsToSort;
        },
        setActiveSort: (state, action: PayloadAction<{ index: number | null }>) => {
            const { index } = action.payload;
            state.activeSort = index;
        }
    },
},
)

export const { applyFilters, updateTicketsSorting, setActiveSort } = ticketsSlice.actions;

export default ticketsSlice.reducer;
