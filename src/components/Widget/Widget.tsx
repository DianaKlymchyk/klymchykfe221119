import React, {FC, useEffect, useState} from 'react';
import './Widget.module.css';
import UserList from "../UserList/UserList";
import UserInfo from "../UserInfo/UserInfo";
import {useSelector} from "react-redux";
import {IUser} from "../../data/interfaces";
import {RootState} from "../../store/slice/UsersReducer";

interface Props {
    users: IUser[];
}

enum WidgetState {
    list,
    info
}

const Widget:FC<Props> = ({users}) => {

    const [appState, setAppState] = useState(WidgetState.list);

    const {activeUser} = useSelector<RootState, {users: IUser[], activeUser: null | IUser}>(state => state.users);

    function onSetUserDetailCallback() { }

    useEffect(() => {
        if (activeUser && activeUser.id !== -1) {
            setAppState(WidgetState.info);
        } else {
            setAppState(WidgetState.list);
        }
    },[activeUser]);

    return (
        <div>
            {appState === WidgetState.list ? <UserList users={users} onSetUserDetailCallback={onSetUserDetailCallback} /> : <UserInfo user={activeUser} />}
        </div>
    );
}

export default Widget;
