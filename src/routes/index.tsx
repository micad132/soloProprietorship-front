import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/authorization/login/Login'
import Home from '../pages/Home/HomeContainer.container'
import Register from '../pages/authorization/register/Register'
import CustomersPage from '../pages/CustomersPage/CustomersPage.container'
import ProductsPage from '../pages/ProductsPage/ProductsPage.container'
import JobsPage from '../pages/JobsPage/JobsPage.container'
import OrdersPage from '../pages/OrdersPage/OrdersPage.container'
import ErrorPage from '../pages/ErrorPage'
import CodeComponent from '../pages/authorization/login/Code.component'

const routes = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/code" element={<CodeComponent />} />
    </Routes>
)

export default routes
