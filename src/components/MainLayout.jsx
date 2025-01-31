import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

const MainLayout = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
