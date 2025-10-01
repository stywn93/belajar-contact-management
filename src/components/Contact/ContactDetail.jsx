import {Link, useParams} from "react-router";
import {useState} from "react";
import {useEffectOnce, useLocalStorage} from "react-use";
import {contactDetail} from "../../lib/api/ContactApi.js";

export default function ContactDetail() {
    const {id} = useParams();
    const [contact, setContact] = useState({});

    const [token, _] = useLocalStorage("token", "");

    async function getDetailContact(){
        const response = await contactDetail(token, id);
        const responseBody = await response.json();
        console.log(responseBody);

        if(response.status === 200){
            setContact(responseBody.data);
        }
    }

    useEffectOnce(() => {
        getDetailContact()
            .then(console.log(() => "berhasil load"))
    })
    return (
        <>
            <div className="flex items-center mb-6">
                <Link to="/dashboard/contacts"
                   className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
                    <i className="fas fa-arrow-left mr-2"></i> Back to Contacts
                </Link>
                <h1 className="text-2xl font-bold text-white flex items-center">
                    <i className="fas fa-id-card text-blue-400 mr-3"></i> Contact Details
                </h1>
            </div>

            <div
                className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
                <div className="p-8">
                    <div className="mb-8 text-center">
                        <div
                            className="w-20 h-20 bg-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                            <i className="fas fa-user text-3xl text-white"></i>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">{contact.first_name}</h2>
                        <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-5 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div
                                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400 mr-2"></i>
                                    <h3 className="text-gray-300 text-sm font-medium">{contact.first_name}</h3>
                                </div>
                                <p className="text-white text-lg ml-6">John</p>
                            </div>
                            <div
                                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-user-tag text-blue-400 mr-2"></i>
                                    <h3 className="text-gray-300 text-sm font-medium">{contact.last_name}</h3>
                                </div>
                                <p className="text-white text-lg ml-6">Doe</p>
                            </div>
                        </div>

                        <div
                            className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                            <div className="flex items-center mb-2">
                                <i className="fas fa-envelope text-blue-400 mr-2"></i>
                                <h3 className="text-gray-300 text-sm font-medium">Email</h3>
                            </div>
                            <p className="text-white text-lg ml-6">{contact.email}</p>
                        </div>

                        <div
                            className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
                            <div className="flex items-center mb-2">
                                <i className="fas fa-phone text-blue-400 mr-2"></i>
                                <h3 className="text-gray-300 text-sm font-medium">Phone</h3>
                            </div>
                            <p className="text-white text-lg ml-6">{contact.phone}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-5">
                            <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i>
                            <h3 className="text-xl font-semibold text-white">Addresses</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div
                                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg border-2 border-dashed border-gray-600 shadow-md card-hover">
                                <a href="add_address.html" className="block h-full">
                                    <div className="flex flex-col items-center justify-center h-full text-center py-4">
                                        <div
                                            className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110">
                                            <i className="fas fa-plus text-2xl text-white"></i>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">Add Address</h4>
                                    </div>
                                </a>
                            </div>

                            <div
                                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 card-hover">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                                        <i className="fas fa-home text-white"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">Home Address</h4>
                                </div>
                                <div className="space-y-3 text-gray-300 ml-2 mb-4">
                                    <p className="flex items-center">
                                        <i className="fas fa-road text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Street:</span>
                                        <span>123 Main St</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-city text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">City:</span>
                                        <span>New York</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-map text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Province:</span>
                                        <span>NY</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-flag text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Country:</span>
                                        <span>USA</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-mailbox text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Postal Code:</span>
                                        <span>10001</span>
                                    </p>
                                </div>
                                <div className="flex justify-end space-x-3">
                                    <a href="edit_address.html"
                                       className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                                        <i className="fas fa-edit mr-2"></i> Edit
                                    </a>
                                    <button
                                        className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                                        <i className="fas fa-trash-alt mr-2"></i> Delete
                                    </button>
                                </div>
                            </div>

                            <div
                                className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 card-hover">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                                        <i className="fas fa-building text-white"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">Work Address</h4>
                                </div>
                                <div className="space-y-3 text-gray-300 ml-2 mb-4">
                                    <p className="flex items-center">
                                        <i className="fas fa-road text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Street:</span>
                                        <span>456 Oak Ave</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-city text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">City:</span>
                                        <span>San Francisco</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-map text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Province:</span>
                                        <span>CA</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-flag text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Country:</span>
                                        <span>USA</span>
                                    </p>
                                    <p className="flex items-center">
                                        <i className="fas fa-mailbox text-gray-500 w-6"></i>
                                        <span className="font-medium w-24">Postal Code:</span>
                                        <span>94102</span>
                                    </p>
                                </div>
                                <div className="flex justify-end space-x-3">
                                    <a href="edit_address.html"
                                       className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                                        <i className="fas fa-edit mr-2"></i> Edit
                                    </a>
                                    <button
                                        className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                                        <i className="fas fa-trash-alt mr-2"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <Link to="/dashboard/contacts"
                           className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md">
                            <i className="fas fa-arrow-left mr-2"></i> Back
                        </Link>
                        <Link to="/dashboard/contacts"
                           className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center">
                            <i className="fas fa-user-edit mr-2"></i> Edit Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}