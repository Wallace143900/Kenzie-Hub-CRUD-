import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({ logout, user, children }) => {
    return (
        <>
        <Header logout={logout} user={user} />
        {children}
        <Footer />
        </>
    );
};