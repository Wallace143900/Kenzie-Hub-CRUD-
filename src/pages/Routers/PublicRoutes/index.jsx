import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DashboardContext } from "../../../providers/dashboardContext";

export const PublicRoutes = () => {
    const { user } = useContext(DashboardContext)

    return user ? <Navigate to="/User" /> : <Outlet />
}