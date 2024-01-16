import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";


const MainLayout = () => {
    return (
        <div className="bg-zinc-50 p-4">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;