import { Route } from "react-router-dom";
import Root from "../components/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import LogInRoot from "../components/Root/LogInRoot/LogInRoot";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const routes = (
    <>
        <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />
        </Route>
        <Route path="/deshboard" element={<LogInRoot isTrue={true} />}>
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
        </Route>
    </>
)

export default routes;