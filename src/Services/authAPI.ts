import axiosClient from "./axiosClient";
import { LoginResult, LoginValues } from "Interface/auth";

const authAPI = {
    login: (values: LoginValues) => {
        return axiosClient.post<LoginResult>("api/auth/login", values);
    },
};
export default authAPI;
