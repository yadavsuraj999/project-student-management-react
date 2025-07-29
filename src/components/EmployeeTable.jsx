import { Link } from "react-router-dom";
const EmployeeTable = ({ employee, onDelete, sortArr, sorting }) => {


  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleSort = () => {
    sortArr()
  }

  return (
    <div className="overflow-hidden rounded-2xl">
      {employee && employee.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto text-gray-300">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Employee Name
                </th>
                <th className="px-6 py-4 text-left cursor-pointer text-sm font-bold uppercase tracking-wider" onClick={handleSort}>
                  Salary {sorting ? "⬇️" : '⬆️'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {employee.map((emp, idx) => (
                <tr
                  key={emp.id}
                  className="hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center w-8 h-8 from-blue-600 to-indigo-700 text-white  text-sm font-bold">
                      {idx + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-lg font-semibold text-white">
                          {emp.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-green-400">
                      💲{Number(emp.salary).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-sm font-semibold text-white">
                      {
                        emp.department
                      }
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-3">
                      <Link
                        to={`/edit-employee/${emp.id}`}
                        className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-4 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                      >
                       Edit
                      </Link>
                      <button
                        className="bg-red-700 text-red-200 px-4 py-2 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-105"
                        onClick={() => handleDelete(emp.id)}
                      >
                       Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold text-gray-400">
            No Employee Found
          </h1>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable

