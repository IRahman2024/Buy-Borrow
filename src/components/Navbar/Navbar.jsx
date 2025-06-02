import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    
    // const links = <>
    //     <li><NavLink to='/suit'>Suit</NavLink></li>
    //     <li><NavLink to='/apartment'>Apartment</NavLink></li>
    //     <li><NavLink to='/duplex'>Duplex</NavLink></li>
    // </>

    return (
        <div className="navbar bg-base-100 shadow-sm z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to='/'>Home</Link>
                        <li>
                            <a>Products</a>
                            <ul className="p-2">
                                <li><a>New !</a></li>
                                <li><a>Can't buy borrow?</a></li>
                            </ul>
                        </li>
                        { user && <Link to='/dashboard'>Dashboard</Link>}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">B&B</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <details>
                            <summary>Products</summary>
                            <ul className="p-2">
                                <li><a>New !</a></li>
                                <li><a>Can't buy borrow?</a></li>
                            </ul>
                        </details>
                    </li>
                    { user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                 {
                    user ? <>
                        <div className="flex gap-x-2 dropdown dropdown-end">
                            <div>
                                <p>{user?.displayName}</p>
                                <p>{user?.email}</p>
                            </div>
                            <div>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Image"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={logOut}><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </> : <NavLink to='/login' className="btn">Log In</NavLink>
                }
                {/* <NavLink to='/login' className="btn">Log In</NavLink> */}
            </div>
        </div>
    )
};

export default Navbar;