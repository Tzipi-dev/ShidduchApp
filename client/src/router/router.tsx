import { createBrowserRouter } from "react-router";
import AppLayout from "../components/AppLayout";
import HomePage from "../components/HomePage";
import GirlsPage from "../components/GirlsPage";
import BoysPage from "../components/BoysPage";

const router = createBrowserRouter([{
    element: <AppLayout />,
    children: [
        { index: true, element: <HomePage /> },
        { path: "girls", element: <GirlsPage /> },
        { path: "boys", element: <BoysPage /> },
        
    ]
}])
export default router