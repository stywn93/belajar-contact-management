import {StrictMode} from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.jsx";
import UserRegister from "./components/User/UserRegister.jsx";
import UserLogin from "./components/User/UserLogin.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserLogout from "./components/User/UserLogout.jsx";
import ContactCreate from "./components/Contact/ContactCreate.jsx";
import ContactList from "./components/Contact/ContactList.jsx";
import ContactEdit from "./components/Contact/ContactEdit.jsx";
import ContactDetail from "./components/Contact/ContactDetail.jsx";
import AddAddress from "./components/Contact/AddAddress.jsx";
import EditAddress from "./components/Contact/EditAddress.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<DashboardLayout/>}/>
                <Route element={<Layout/>}>
                    <Route path={"/register"} element={<UserRegister/>}/>
                    <Route path={"/login"} element={<UserLogin/>}/>
                </Route>
                <Route path={"/dashboard"} element={<DashboardLayout/>}>
                    <Route path={"users"}>
                        <Route path={"profile"} element={<UserProfile/>}/>
                        <Route path={"logout"} element={<UserLogout/>}/>
                    </Route>
                    <Route path={"contacts"}>
                        <Route index element={<ContactList/>}/>
                        <Route path={"create"} element={<ContactCreate/>}/>

                        <Route path={":id"}>
                            <Route index element={<ContactDetail/>}/>
                            <Route path={"edit"} element={<ContactEdit/>}/>
                            <Route path={"addresses"}>
                                <Route index element={<AddAddress/>}/>
                                <Route path={":addressId"} element={<EditAddress/>}/>
                            </Route>
                        </Route>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
