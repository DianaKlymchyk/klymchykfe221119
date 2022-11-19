import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./slice/UsersReducer";
import usersApi from "./api/UsersAPI";

const store = configureStore({
    reducer: {
        users:usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});

export default store;