import { Routes, Route } from "react-router-dom";
import Login from "../layout/header/authorization/Login";
import Home from "../pages/home";
import Register from "../layout/header/authorization/Register";


const routes = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

    </Routes>
);

export default routes;
