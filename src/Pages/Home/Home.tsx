import React from "react";
import { TabTitle } from "Utill/GenaralFunction";
import Filter from "../../Components/Filter/Filter";
import RoomList from "../../Components/RoomList/RoomList";

const Home = () => {
    TabTitle("Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb");
    return (
        <>
            <Filter />
            <RoomList />
        </>
    );
};

export default Home;
