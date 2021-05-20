import React, { useState } from 'react';

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
    const [ count, setCount ] = useState(0);

    const handleClick = () => {
        setCount(count + 1);

        props.onClick?.();
    };

    return (
        <button onClick={handleClick}>{(props.text ?? props.children) + ' ' + count}</button>
    )
}

export default Button;