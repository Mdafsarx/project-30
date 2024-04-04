import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
        <NavLink to={'/'} className={'font-bold '}>Home</NavLink>
        <NavLink to={'/AppliedJobs'} className={'font-bold '}>Applied Jobs</NavLink>
        <NavLink to={'/Login'} className={'font-bold '}>Login</NavLink>
        <NavLink to={'/SingUp'} className={'font-bold '}>Sing up</NavLink>
        <NavLink to={'/Blog'} className={'font-bold '}>Blog</NavLink>
    </>
    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] space-x-4 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl gap-0">Career<span className="text-blue-500">Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-400 text-white">Start applying</a>
            </div>
        </div>
    );
};

export default Navbar;