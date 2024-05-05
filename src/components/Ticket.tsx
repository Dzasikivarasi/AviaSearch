import React from "react"
import { TicketType } from "../types"
import { formatTime, formatTransferCount } from "../utils.ts"
import { COMPANIES } from "../data.js"

type TicketProps = {
    item: TicketType
}

export default function Ticket({ item }: TicketProps): JSX.Element {
    const company = COMPANIES.find(company => company.name === item.company);
    const logo = company ? company.logo : '';

    return (
        <li className="tickets__result-list-item">
            <div className="tickets__result-list-item-top">
                <p className="tickets__result-list-item-top-price">{item.price.toLocaleString()} ₽</p>
                <img className="tickets__result-list-item-top-logo" src={logo} alt="company-logo" />
            </div>
            <ul className="tickets__result-list-item-bottom">
                <li key={item.from} className="tickets__result-list-item-data">
                    <p className="tickets__result-list-item-data-title">{item.from} - {item.to}</p>
                    <p className="tickets__result-list-item-data-description">{item.time.startTime} - {item.time.endTime} </p>
                </li>
                <li key={item.duration} className="tickets__result-list-item-data">
                    <p className="tickets__result-list-item-data-title">В пути</p>
                    <p className="tickets__result-list-item-data-description">{formatTime(item.duration)}</p>
                </li>
                <li key={item.connectionAmount} className="tickets__result-list-item-data">
                    <p className="tickets__result-list-item-data-title">Пересадки</p>
                    <p className="tickets__result-list-item-data-description">{formatTransferCount(item.connectionAmount,'пересад')}</p>
                </li>
            </ul>
        </li>
    )
}
