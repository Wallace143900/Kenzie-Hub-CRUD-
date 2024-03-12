import { DefaultTemplate } from "../../components/DefaultTemplate"

export const UserPage = ({logout, user}) => {
    return (

        <DefaultTemplate logout={logout} user={user}>
        <main>
            <div>
                <h2>Olá, {user?.name}</h2>
                <p>Primeiro módulo (Introdução ao Frontend)</p>
                <div>
                    <h2>Que pena! Estamos em devolvimento :( </h2>
                    <h4>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h4>
                </div>
            </div>
        </main> 
        </DefaultTemplate>
    )
}