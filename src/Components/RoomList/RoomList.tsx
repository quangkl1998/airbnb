import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getListRoom } from "Slices/room";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./RoomList.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

const RoomList = () => {
    const { listRoom, isLoading, error } = useSelector(
        (state: RootState) => state.room,
    );

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getListRoom());
    }, []);

    const createRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const createRandomStar = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) * 100) / 100 + min;
    };

    return (
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-4 gap-6 mx-10">
                {listRoom.map((room) => {
                    return (
                        <NavLink
                            key={room._id}
                            className="roomLink"
                            to={`/roomdetail/${room._id}`}
                        >
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="roomSwiper relative"
                            >
                                <SwiperSlide className="w-full">
                                    <img src={room.image} alt={room.image} />
                                </SwiperSlide>
                                <SwiperSlide className="w-full">
                                    <img src={room.image} alt={room.image} />
                                </SwiperSlide>
                                <SwiperSlide className="w-full">
                                    <img src={room.image} alt={room.image} />
                                </SwiperSlide>
                                <button className="absolute top-3 right-3 z-30">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            fill: "rgba(0, 0, 0, 0.5)",
                                            height: "24px",
                                            width: "24px",
                                            stroke: "#fff",
                                            strokeWidth: 2,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                                    </svg>
                                </button>
                            </Swiper>
                            <div>
                                <p className="flex justify-between mt-2">
                                    <span className="font-bold">
                                        {room.name}
                                    </span>
                                    <span>
                                        <i className="fa fa-star"></i>{" "}
                                        {createRandomStar(1, 10).toFixed(2)}
                                    </span>
                                </p>
                                <p className="text-gray-500">
                                    {createRandomNumber(2, 10000)} km
                                </p>
                                <p className="text-gray-500">
                                    Ngày {createRandomNumber(1, 30)} - Ngày{" "}
                                    {createRandomNumber(1, 30)} tháng{" "}
                                    {createRandomNumber(1, 12)}
                                </p>
                                <p className="mt-1">
                                    <span className="font-bold">
                                        ${createRandomNumber(99, 599)}
                                    </span>{" "}
                                    đêm
                                </p>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default RoomList;