import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            <div className="bg-slate-100">
                <Navbar />
            </div>
                <Outlet></Outlet>
        </div>
    );
};

export default Root;