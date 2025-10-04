import {Link, Outlet, useNavigate} from "react-router";
import {userDetail} from "../lib/api/UserApi.js";
import {useEffectOnce, useLocalStorage} from "react-use";

export default function DashboardLayout() {
    const [token, _] = useLocalStorage("token", "");
    const navigate = useNavigate();

    //cek dulu usernya apakah sudah login atau belum
    async function getUserStatus(){
        const response = await userDetail(token);
        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200){
            navigate("/dashboard/contacts");
        } else{
            navigate("/login");
        }
    }

    useEffectOnce(() => {
        getUserStatus()
            .then(console.log(() => "user data fethed"));
    })

    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
                <header className="bg-gradient shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <Link to="/dashboard/contacts"
                              className="flex items-center hover:opacity-90 transition-opacity duration-200">
                            <i className="fas fa-address-book text-white text-2xl mr-3"></i>
                            <div className="text-white font-bold text-xl">Contact Management</div>
                        </Link>
                        <nav>
                            <ul className="flex space-x-6">
                                <li>
                                    <Link to="/dashboard/users/profile"
                                          className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                                        <i className="fas fa-user-circle mr-2"></i>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/users/logout"
                                          className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8 flex-grow">
                    <Outlet/>
                    <div className="mt-10 mb-6 text-center text-gray-400 text-sm animate-fade-in">
                        <p>© 2025 Contact Management. All rights reserved.</p>
                    </div>
                </main>

            </div>
        </>
    )
}