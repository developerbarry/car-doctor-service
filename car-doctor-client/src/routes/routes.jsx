import { Route } from "react-router-dom";
import Root from "../layouts/Root/Root";
import HomePage from "../pages/HomePage/HomePage";

const routes = (
    <>
        <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />
        </Route>
    </>
)

export default routes;