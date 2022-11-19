import React from 'react';
import './App.css';

import {useGetAllUsersQuery} from "../store/api/UsersAPI";
import {useSelector} from "react-redux";

import Widget from "./Widget/Widget";
import {RootState} from "../store/slice/UsersReducer";
import {IUser} from "../data/interfaces";

function App() {

    // @ts-ignore
    useGetAllUsersQuery();

    const {users} = useSelector<RootState, {users: IUser[], activeUser: null | IUser}>(state => state.users);

    return (
        <div className="app-container">
            <Widget users={users}/>
        </div>
  );
}

export default App;
