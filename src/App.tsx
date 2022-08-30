import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Info from "./Pages/Info/Info";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RoomDetail from "./Pages/RoomDetail/RoomDetail";
import RoomByCity from "./Pages/RoomByCity/RoomByCity";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplate />}>
                    <Route path="" element={<Home />} />
                    <Route path="/roomdetail/:id" element={<RoomDetail />} />
                    <Route path="/roombycity/:id" element={<RoomByCity />} />
                    <Route path="/personal-info" element={<Info />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
