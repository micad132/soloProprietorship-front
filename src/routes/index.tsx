import { Routes, Route } from "react-router-dom";
import Login from "../pages/authorization/login/Login";
import Home from "../pages/home";
import Register from "../pages/authorization/register/Register";


const routes = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

    </Routes>
);

export default routes;
