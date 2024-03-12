import { Routes, Route, useNavigate } from "react-router-dom";
import { HomePage } from "../../HomePage";
import { RegisterPage } from "../../RegisterPage";
import { UserPage } from "../../UserPage";
import { ErrorPage } from "../../ErrorPage";
import { useState } from "react";

export const RouterMain = () => {

    const [user, setUser] = useState(null);

    const [register, setRegister] = useState(null);

    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    const registers = () => {
        setRegister(null);
        navigate("/register");
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser} register={register} registers={registers} />}/>
            <Route path="/register" element={<RegisterPage setUser={setUser} setRegister={setRegister} logout={logout} />}/>
            <Route path="/User" element={<UserPage logout={logout} user={user}/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}