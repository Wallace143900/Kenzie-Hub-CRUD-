import { Link } from "react-router-dom"

export const Header = ({logout}) => {
    return (
        <header>
            <h1>Kenzie Hub</h1>
            <button onClick={logout}>Voltar</button>
        </header>
    )
}