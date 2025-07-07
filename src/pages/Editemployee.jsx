import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Editemployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [error, setError] = useState({});
    const [employee, setEmployee] = useState({
        name: "",
        salary: "",
        department: "",
    });

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem("employee")) || [];
        const isloggedin = JSON.parse(localStorage.getItem("isloggedin")) || false;
        const empdata = employees.find((emp) => emp.id == id);

        if (empdata) {
            setEmployee(empdata);
        } else {
            if (isloggedin) {
                toast.error("User Not Found");
            }
            navigate("/employees");
        }
    }, [id, navigate]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.id]: e.target.value });
        setError({ ...error, [e.target.id]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempObj = {};
        if (employee.name.trim() === "") {
            tempObj.name = "Please enter the name";
        }
        if (employee.salary === "") {
            tempObj.salary = "Please enter the salary";
        }
        if (employee.department === "") {
            tempObj.department = "Please select a department";
        }

        setError(tempObj);

        if (Object.keys(tempObj).length === 0) {
            const employees = JSON.parse(localStorage.getItem("employee")) || [];

            const updatedEmployees = employees.map((emp) =>
                emp.id == id ? { ...emp, ...employee } : emp
            );

            localStorage.setItem("employee", JSON.stringify(updatedEmployees));
            toast.success("Employee Updated Successfully");

            setEmployee({ name: "", salary: "", department: "" });
            navigate("/employee");
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
            <div className="h-[83.1vh] flex items-center justify-center p-6">
                <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Edit Employee</h2>
                        <p className="text-gray-300">Update employee information below</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-200 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`bg-gray-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-white dark:focus:bg-gray-900 focus:shadow-md ${error.name ? "border-red-300" : "border-gray-300 dark:border-gray-600"}`}
                                    placeholder="John"
                                    onChange={handleChange}
                                    value={employee.name}
                                />
                                {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="salary" className="mb-2 text-sm font-medium text-gray-200 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                    Salary
                                </label>
                                <input
                                    type="number"
                                    id="salary"
                                    className={`bg-gray-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-white dark:focus:bg-gray-900 focus:shadow-md ${error.salary ? "border-red-300" : "border-gray-300 dark:border-gray-600"}`}
                                    placeholder="Enter salary amount"
                                    onChange={handleChange}
                                    value={employee.salary}
                                />
                                {error.salary && <p className="text-red-500 text-sm mt-1">{error.salary}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="department" className="mb-2 text-sm font-medium text-gray-200 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Department
                            </label>
                            <select
                                id="department"
                                className={`bg-gray-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-white dark:focus:bg-gray-900 focus:shadow-md ${error.department ? "border-red-300" : "border-gray-300 dark:border-gray-600"}`}
                                onChange={handleChange}
                                value={employee.department}
                            >
                                <option value="">Choose a Department</option>
                                <option value="1">Designing</option>
                                <option value="2">Development</option>
                                <option value="3">Finance</option>
                                <option value="4">Sales And Marketing</option>
                            </select>
                            {error.department && <p className="text-red-500 text-sm mt-1">{error.department}</p>}
                        </div>

                        <div className="text-center pt-5">
                            <button
                                className="inline-flex gap-3 items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                type="submit"
                            >
                                <i className="ri-edit-2-fill"></i>
                                Update Employee
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-blue-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <p className="text-sm text-blue-300">
                                All fields are required. Please ensure the information is accurate before submitting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editemployee;