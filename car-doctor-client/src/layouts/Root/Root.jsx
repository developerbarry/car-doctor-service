import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <main>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default Root;