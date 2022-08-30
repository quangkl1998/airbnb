import { Room } from "Interface/room";
import axiosClient from "./axiosClient";

const roomAPI = {
    getListRoom: () => {
        return axiosClient.get<Room[]>("api/rooms", {
            params: {
                limit: 32,
            },
        });
    },
    getListRoomByLocation: (locationId: string) => {
        return axiosClient.get<Room[]>("api/rooms", {
            params: {
                locationId,
            },
        });
    },
    getRoomDetail: (roomId: string) => {
        return axiosClient.get<Room>(`api/rooms/${roomId}`);
    },
};
export default roomAPI;
