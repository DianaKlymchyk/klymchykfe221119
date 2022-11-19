import {createSlice} from "@reduxjs/toolkit";
import usersApi from "../api/UsersAPI";
import store from "../index";
import {IUser} from "../../data/interfaces";

const initialState: {users: IUser[], activeUser: null | IUser} = {
    users: [],
    activeUser: null,
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setActiveUser: (state, {payload}) => {
            console.log('payload: ', payload)
            state.activeUser = state.users[payload];
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            usersApi.endpoints.getAllUsers.matchFulfilled,
            (state, {payload}) => {
                state.users = payload.map((el: any, idx: number) => { return { ...el, id: idx } });
                console.log('state.users', state.users);
            }
        )
        builder.addMatcher(
            usersApi.endpoints.getAllUsers.matchPending,
            (state, {payload}) => {
                console.log('pending');
            }
        )
        builder.addMatcher(
            usersApi.endpoints.getAllUsers.matchRejected,
            (state, {payload}) => {
                console.log('rejected');
            }
        )
    }
});

export const {setActiveUser} = usersSlice.actions;

export default usersSlice.reducer;

export type RootState = ReturnType<typeof store.getState>;