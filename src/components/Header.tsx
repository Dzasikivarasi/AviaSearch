import React from "react"

export default function Header(): JSX.Element {
    return (
        <header className="header">
            <a href="#">
                <img className="header__logo" src="img/logo.svg" alt="logo" />
            </a>
            <h1>Поиск авиабилетов</h1>
        </header>)
};
