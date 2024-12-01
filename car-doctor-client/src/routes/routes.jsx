import { Route } from "react-router-dom";
import Root from "../components/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import LogInPage from "../pages/LogInPage/LogInPage";
import LogInRoot from "../components/Root/LogInRoot/LogInRoot";

const routes = (
    <>
        <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LogInRoot isTrue={true} />}>
            <Route index element={<LogInPage />} />
        </Route>
    </>
)

export default routes;