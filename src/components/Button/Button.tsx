import React, {FC, useState} from 'react';
import './Button.css';

interface Props {
    text: string;
    typeOfWidth?: string;
    onClickCallback?: () => void;
}

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

const Button: FC<Props> = ({text,typeOfWidth, onClickCallback}) => {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <button
            className={`view-button ${status}`}
            style={{width: typeOfWidth === 'full' ? '100%' : 'auto'}}
            onClick={() => onClickCallback && onClickCallback()}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {text}
        </button>
    );
}

export default Button;
