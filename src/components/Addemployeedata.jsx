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
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Add Employee
                    </h2>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 text-sm font-medium text-white flex items-center"
                            >
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
