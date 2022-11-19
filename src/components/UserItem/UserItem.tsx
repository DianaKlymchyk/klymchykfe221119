import React, {FC} from 'react';
import './UserItem.css';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {setActiveUser} from "../../store/slice/UsersReducer";
import {images} from "../../data/images";
import {IUser} from "../../data/interfaces";

interface Props {
    user: IUser;
}

const UserItem: FC<Props> = ({user}) => {

    const dispatch = useDispatch();

    return (
        <div className="user-item">
            <img src={images[+user?.id]} alt=""/>
            <div>
                {user?.name}
                <br/>
                {user?.nickname}
            </div>
            <Button text='View' typeOfWidth='' onClickCallback={() => { dispatch(setActiveUser(user?.id)) }}/>
        </div>
    );
}

export default UserItem;
