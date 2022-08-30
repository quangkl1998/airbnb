import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResult, LoginValues, UserValues } from "Interface/auth";
import authAPI from "Services/authAPI";

interface State {
    user: UserValues | null;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    user: null || JSON.parse(localStorage.getItem("user") as string),
    isLoading: false,
    error: undefined,
};
export const login = createAsyncThunk(
    "auth/login",
    async (values: LoginValues) => {
        try {
            const loginResult = await authAPI.login(values);
            if (loginResult.user) return loginResult;
            else return null;
        } catch (error) {
            console.log(123);
            throw error;
        }
    },
);
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        removeUser: (state, { payload }) => {
            state.user = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            if (payload) state.user = payload.user;
        });
        builder.addCase(login.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export const { removeUser } = authSlice.actions;

export default authSlice.reducer;
