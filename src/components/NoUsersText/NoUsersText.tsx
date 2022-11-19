import React, {FC} from 'react';
import './NoUsersText.css';

interface Props {
    text: string;
}

const NoUsersText: FC<Props> = ({text}) => {
    const onClickHandler = () => {
        console.log('on click on no text div')
    }

    return (
        <div className="no-users" onClick={onClickHandler}>{text}</div>
    );
}

export default NoUsersText;
