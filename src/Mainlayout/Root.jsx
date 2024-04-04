import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="bg-slate-100">
                <Navbar />
            </div>
                <Outlet></Outlet>
                <Footer/>
        </div>
    );
};

export default Root;