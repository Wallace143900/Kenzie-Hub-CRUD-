import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../HomePage";
import { RegisterPage } from "../../RegisterPage";
import { Dashboard } from "../../dashboard";
import { ErrorPage } from "../../ErrorPage";

export const RouterMain = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/User" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}