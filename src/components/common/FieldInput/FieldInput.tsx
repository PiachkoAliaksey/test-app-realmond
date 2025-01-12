import React, {ReactNode, SyntheticEvent } from 'react';

type TFieldInput = {
    type: string,
    addClassNames: string,
    placeholder: string,
    value?: string,
    onChange?: (e: SyntheticEvent<HTMLInputElement>) => void,
    children?: ReactNode,
}

const FieldInput = ({ type = 'text', addClassNames, placeholder, value, onChange, children }: TFieldInput) => {
    return (
        <div className='relative w-full'>
            <input
                type={type}
                className={addClassNames}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {children}
        </div>

    )
}

export default FieldInput