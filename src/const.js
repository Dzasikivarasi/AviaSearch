const FILTERS_TRANSFERS = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const SORTING = ['Самый дешевый', 'Самый быстрый', 'Самый оптимальный'];
const TICKETS_PER_CLICK = 3;
const EMPTY_MESSAGE = 'Предложения отсутствуют';

const TransferFilters = {
    "Без пересадок": null,
    "1 пересадка": 1,
    "2 пересадки": 2,
    "3 пересадки": 3,
    "4 пересадки": 4
};

export { FILTERS_TRANSFERS, SORTING, TICKETS_PER_CLICK, TransferFilters, EMPTY_MESSAGE };
