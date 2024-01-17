import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Footer1 from "../Shared/Footer/Footer1/Footer1";
import Footer2 from "../Shared/Footer/Footer1/Footer2";


const MainLayout = () => {
    return (
        <div className="bg-zinc-50 p-4">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer1></Footer1>
            <Footer2></Footer2>
        </div>
    );
};

export default MainLayout;