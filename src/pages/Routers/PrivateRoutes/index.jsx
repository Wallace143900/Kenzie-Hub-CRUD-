import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DashboardContext } from "../../../providers/dashboardContext";

export const PrivateRoutes = () => {
    const { user } = useContext(DashboardContext)

    return user ? <Outlet /> : <Navigate to="/" />
}