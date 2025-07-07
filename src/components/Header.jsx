import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const Header = ({ isLoggedin, setIsLoggedin }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu

  const handleClick = () => {
    setIsLoggedin(false);
    localStorage.setItem("isloggedin", JSON.stringify(false));
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Empower
                  </span>
                </div>
              </div>
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-full font-semibold  ${
                    pathname == "/" ? "text-blue-400 bg-gray-800" : "text-white"
                  } hover:bg-gray-700 hover:text-white transition duration-300`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-4 py-2 rounded-full font-semibold ${
                    pathname == "/about"
                      ? "text-blue-400 bg-gray-800"
                      : "text-white"
                  } hover:text-blue-400 hover:bg-gray-800 transition duration-300`}
                >
                  About
                </Link>

                {isLoggedin && (
                  <Link
                    to="/employee"
                    className={`px-4 py-2 rounded-full font-semibold ${
                      pathname == "/employee"
                        ? "text-blue-400 bg-gray-800"
                        : "text-white"
                    } hover:text-blue-400 hover:bg-gray-800 transition duration-300`}
                  >
                    Employee
                  </Link>
                )}

                {isLoggedin ? (
                  <button
                    onClick={handleClick}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-full font-semibold ${
                  pathname == "/" ? "text-blue-400 bg-gray-800" : "text-white"
                } hover:bg-gray-700 hover:text-white transition duration-300`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-full font-semibold ${
                  pathname == "/about" ? "text-blue-400 bg-gray-800" : "text-white"
                } hover:text-blue-400 hover:bg-gray-800 transition duration-300`}
              >
                About
              </Link>

              {isLoggedin && (
                <Link
                  to="/employee"
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-full font-semibold ${
                    pathname == "/employee" ? "text-blue-400 bg-gray-800" : "text-white"
                  } hover:text-blue-400 hover:bg-gray-800 transition duration-300`}
                >
                  Employee
                </Link>
              )}

              {isLoggedin ? (
                <button
                  onClick={() => {
                    handleClick();
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
