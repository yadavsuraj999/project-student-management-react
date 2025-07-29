import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addemployedata = () => {
    const [employee, setEmployee] = useState({
        name: "",
        salary: "",
        department: "",
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingEmployees = JSON.parse(localStorage.getItem("employee")) || [];
        const newEmployee = { ...employee, id: Date.now() };
        const updatedEmployees = [...existingEmployees, newEmployee];

        let tempObj = {};

        if (employee.name.trim() === "") {
            tempObj.name = "Please Enter The Name";
        }
        if (employee.salary.trim() === "") {
            tempObj.salary = "Please Enter The Salary";
        }
        if (employee.department === "") {
            tempObj.department = "Please Select A Department";
        }

        setError(tempObj);

        if (Object.keys(tempObj).length === 0) {
            localStorage.setItem("employee", JSON.stringify(updatedEmployees));
            navigate("/employee");
        }
    };

    return (
        <div className="h-[100vh] flex items-center justify-center p-6 bg-gray-900 text-white">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full mb-4 shadow-md">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Employee Management
                    </h2>
                    <p className="text-gray-300">
                        Add new employee to the system
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 text-sm font-medium text-white flex items-center"
                            >
                                <svg
                                    className="w-4 h-4 mr-2 text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                First name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={`bg-gray-700 text-white text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 transition-all duration-200 hover:bg-gray-600 focus:bg-gray-900 focus:shadow-md ${error.name
                                        ? "border border-red-500"
                                        : "border border-gray-600"
                                    }`}
                                placeholder="John"
                                onChange={handleChange}
                                value={employee.name}
                            />
                            {error.name && (
                                <p className="text-red-400 text-sm mt-1">{error.name}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="salary"
                                className="mb-2 text-sm font-medium text-white flex items-center"
                            >
                                <svg
                                    className="w-4 h-4 mr-2 text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                    />
                                </svg>
                                Salary
                            </label>
                            <input
                                type="number"
                                id="salary"
                                className={`bg-gray-700 text-white text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-3 transition-all duration-200 hover:bg-gray-600 focus:bg-gray-900 focus:shadow-md ${error.salary
                                        ? "border border-red-500"
                                        : "border border-gray-600"
                                    }`}
                                placeholder="Enter salary amount"
                                onChange={handleChange}
                                value={employee.salary}
                                min="0"
                            />
                            {error.salary && (
                                <p className="text-red-400 text-sm mt-1">{error.salary}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="department"
                            className="mb-2 text-sm font-medium text-white flex items-center"
                        >
                            <svg
                                className="w-4 h-4 mr-2 text-purple-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                            Department
                        </label>
                        <select
                            id="department"
                            className={`bg-gray-700 text-white text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-3 transition-all duration-200 hover:bg-gray-600 focus:bg-gray-900 focus:shadow-md ${error.department
                                    ? "border border-red-500"
                                    : "border border-gray-600"
                                }`}
                            onChange={handleChange}
                            value={employee.department}
                        >
                            <option value="">Choose a Department</option>
                            <option value="Designing">Designing</option>
                            <option value="Development">Development</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        {error.department && (
                            <p className="text-red-400 text-sm mt-1">{error.department}</p>
                        )}
                    </div>

                    <div className="text-center pt-6">
                        <button
                            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            type="submit"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            Add Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addemployedata;
