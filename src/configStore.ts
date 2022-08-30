import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/auth";
import location from "./Slices/location";
import room from "./Slices/room";
import review from "./Slices/review";

const store = configureStore({
    reducer: { auth, location, room, review },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;

// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;
