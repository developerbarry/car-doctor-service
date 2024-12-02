import { Route } from "react-router-dom";
import Root from "../components/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import LogInRoot from "../components/Root/LogInRoot/LogInRoot";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import CheckOut from "../pages/Deshboard/CheckOut/CheckOut";
import OrderPage from "../pages/OrderPage/OrderPage";

const routes = (
    <>
        <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />
            <Route path="checkout/:id" element={<CheckOut />} />
        </Route>
        <Route path="/deshboard" element={<LogInRoot isTrue={true} />}>
            <Route index element={<OrderPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
        </Route>
    </>
)

export default routes;