import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../HomePage";
import { RegisterPage } from "../../RegisterPage";
import { Dashboard } from "../../dashboard";
import { ErrorPage } from "../../ErrorPage";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";

export const RouterMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            </Route>

            <Route element={<PrivateRoutes />}>
            <Route path="/User" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}