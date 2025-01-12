import React, { ReactNode } from 'react';

type TButton = {
    type: "submit" | "reset" | "button",
    handlerClick?: () => void,
    addClassNames: string,
    title: ReactNode,
}

const Button = ({ type = 'button', handlerClick, addClassNames, title }: TButton) => {
    return (
        <button className={addClassNames} type={type} onClick={handlerClick}>{title}</button>
    )
}

export default Button