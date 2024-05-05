type TicketTime = {
    startTime: string;
    endTime: string;
}

type TicketType = {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: string;
    time: TicketTime;
    duration: number;
    date: string;
    connectionAmount: number | null;
}

type FiltersType = string[];

type CompaniesInfoType = {
    name: string;
    logo: string;
}[];

export type { TicketTime, TicketType, FiltersType, CompaniesInfoType }