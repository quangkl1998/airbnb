import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResult, LoginValues, UserValues } from "Interface/auth";
import authAPI from "Services/authAPI";

interface State {
    loginresult: LoginResult[];
    user: UserValues | null;
    isloading: boolean;
    error?: string;
}
const initialState: State = {
    loginresult: [],
    user: null || JSON.parse(localStorage.getItem("user") as string),
    isloading: false,
    error: undefined,
};
export const login = createAsyncThunk(
    "auth/login",
    async (values: LoginValues) => {
        try {
            const data = await authAPI.login(values);

            return data;
        } catch (error) {
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
            state.isloading = true;
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isloading = false;
            state.user = payload?.user;
        });
        builder.addCase(login.rejected, (state, { error }) => {
            state.isloading = false;
            state.error = error.message;
        });
    },
});

export const { removeUser } = authSlice.actions;

export default authSlice.reducer;
