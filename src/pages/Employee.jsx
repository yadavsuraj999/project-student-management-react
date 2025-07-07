import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [filter, setFilter] = useState({ search: "", department: "" });
  const [sorting, setSorting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let employeedata = JSON.parse(localStorage.getItem("employee")) || [];
    setEmployee(employeedata);
  }, []);

  const onDelete = (id) => {
    const updatedEmployee = employee.filter((emp) => emp.id !== id);
    setEmployee(updatedEmployee);
    localStorage.setItem("employee", JSON.stringify(updatedEmployee));
  };

  const filteredEmployee = employee
    .filter((emp) => {
      if (filter.search === "") {
        return emp;
      } else {
        return emp.name
          .toLowerCase()
          .includes(filter.search.trim().toLowerCase());
      }
    })
    .filter((emp) => {
      return filter.department === "" ? true : emp.department === filter.department;
    });

  const sortArr = () => {
    setSorting(!sorting);
    const updatedArr = [...filteredEmployee];
    updatedArr.sort((a, b) => {
      return sorting ? a.salary - b.salary : b.salary - a.salary;
    });
    setEmployee(updatedArr);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent pb-2 tracking-wide">
              Employee Directory
            </h4>
            <p className="text-gray-300 max-w-md">
              Manage your team members and their information
            </p>
          </div>

          {/* Filters and Button */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
            <select
              id="department"
              value={filter.department}
              className="bg-gray-700 text-white text-sm rounded-lg w-full sm:w-auto focus:ring-blue-600 focus:border-blue-600 p-2 transition-all duration-200 hover:bg-gray-600 focus:bg-gray-900 focus:shadow-md"
              onChange={(e) =>
                setFilter({ ...filter, [e.target.id]: e.target.value })
              }
            >
              <option value="">Choose a Department</option>
              <option value="Designing">Designing</option>
              <option value="Development">Development</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>

            <input
              type="text"
              id="search"
              placeholder="Search Employee"
              value={filter.search}
              onChange={(e) =>
                setFilter({ ...filter, [e.target.id]: e.target.value })
              }
              className="bg-gray-700 text-white px-6 py-2 rounded-xl font-semibold w-full sm:w-auto"
            />

            <button
              onClick={() => navigate("/addemployee")}
              className="inline-flex items-center justify-center w-full sm:w-auto space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-lg font-bold">+</span>
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        {/* Table or Empty State */}
        <div className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {filteredEmployee.length > 0 ? (
            <EmployeeTable
              employee={filteredEmployee}
              onDelete={onDelete}
              sortArr={sortArr}
              sorting={sorting}
            />
          ) : (
            <div className="text-center py-20 px-4">
              <div className="text-7xl mb-6">👥</div>
              <h1 className="text-3xl font-bold text-gray-200 mb-4">
                No Employees Found
              </h1>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Start building your team by adding your first employee
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;
