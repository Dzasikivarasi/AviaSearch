const TICKETS = [
    {
        id: 1,
        from: 'SVO',
        to: 'LED',
        company: 'Pobeda',
        price: 45010,
        currency: 'RUB',
        time: {
            startTime: '10:14',
            endTime: '12:00',
        },
        duration: 106,
        date: '2024-05-10',
        connectionAmount: null,
    },
    {
        id: 2,
        from: 'SVO',
        to: 'AER',
        company: 'S7 Airlines',
        price: 10344,
        currency: 'RUB',
        time: {
            startTime: '11:46',
            endTime: '14:00',
        },
        duration: 124,
        date: '2024-05-10',
        connectionAmount: 1,
    },
    {
        id: 3,
        from: 'KRR',
        to: 'LED',
        company: 'Red Wings',
        price: 45599,
        currency: 'RUB',
        time: {
            startTime: '12:00',
            endTime: '15:00',
        },
        duration: 180,
        date: '2024-05-10',
        connectionAmount: 1,
    },
    {
        id: 4,
        from: 'SVO',
        to: 'KJA',
        company: 'Pobeda',
        price: 12109,
        currency: 'RUB',
        time: {
            startTime: '09:00',
            endTime: '13:25',
        },
        duration: 265,
        date: '2024-05-11',
        connectionAmount: 2,
    },
    {
        id: 5,
        from: 'LED',
        to: 'KJA',
        company: 'S7 Airlines',
        price: 34209,
        currency: 'RUB',
        time: {
            startTime: '10:10',
            endTime: '15:00',
        },
        duration: 290,
        date: '2024-05-11',
        connectionAmount: 2,
    },
    {
        id: 6,
        from: 'SVO',
        to: 'LED',
        company: 'Pobeda',
        price: 18693,
        currency: 'RUB',
        time: {
            startTime: '10:14',
            endTime: '12:00',
        },
        duration: 106,
        date: '2024-05-10',
        connectionAmount: 3,
    },
    {
        id: 7,
        from: 'SVO',
        to: 'AER',
        company: 'S7 Airlines',
        price: 20354,
        currency: 'RUB',
        time: {
            startTime: '11:46',
            endTime: '14:00',
        },
        duration: 124,
        date: '2024-05-10',
        connectionAmount: 1,
    }
];

const COMPANIES = [
    {
        name: 'Pobeda',
        logo: '/img/pobeda.svg'
    },
    {
        name: 'S7 Airlines',
        logo: '/img/s7.svg'
    },
    {
        name: 'Red Wings',
        logo: '/img/red-wings.svg'
    }];

const FILTERS_TRANSFERS = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const SORTING = ['Самый дешевый', 'Самый быстрый', 'Самый оптимальный'];
const TICKETS_PER_CLICK = 3;

export { TICKETS, COMPANIES, FILTERS_TRANSFERS, SORTING, TICKETS_PER_CLICK };
