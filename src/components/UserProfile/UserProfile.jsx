import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    
    return (
        <div className="hero bg-base-200 min-h-screen flex items-start p-5">
            <div>
                <p className="text-2xl font-semibold"></p>
            </div>
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src= {user?.photoURL || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{user?.displayName || 'No user name found!'}</h1>
                    <p className="py-6">{user?.email}</p>
                    <p className="text-sm">Address: Shibgonj, Syhlet</p>
                    <p className="text-sm">Number: 013xxxxxx</p>
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;