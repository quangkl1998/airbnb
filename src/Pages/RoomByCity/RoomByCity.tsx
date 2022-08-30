import HotelList from "../../Components/HotelList/HotelList";
import Map from "../../Components/Map/Map";

const RoomByCity = () => {
    return (
        <div className="container mx-auto">
            <div className="h-28"></div>
            <div className="grid grid-cols-2 gap-6">
                <HotelList />
                <Map />
            </div>
        </div>
    );
};

export default RoomByCity;
