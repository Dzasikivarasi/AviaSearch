import React from "react"

type LoadButtonProps = {
    onButtonClick: () => void;
    disabled: boolean;
}

export default function LoadButton({ onButtonClick, disabled }: LoadButtonProps): JSX.Element {

    const buttonClickHandler = () => { 
        onButtonClick(); 
    }

    return (
        <button className="load-button" onClick={buttonClickHandler} disabled={disabled}>Загрузить еще билеты</button>
    )
}
