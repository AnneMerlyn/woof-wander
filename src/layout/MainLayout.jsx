import { Outlet } from "react-router";
import { Nav } from "../components/Nav";

export const MainLayout = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto">
                <Outlet />
            </div>
        </>
    );
};
