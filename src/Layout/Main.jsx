import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-30px)]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;