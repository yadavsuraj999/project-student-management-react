import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setIsLoggedin }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (input.email === "admin@gmail.com" && input.password === "admin@123") {
      toast.success("Logged In Successfully");
      setIsLoggedin(true);
      localStorage.setItem("isloggedin", JSON.stringify(true));
      navigate("/employee");
    } else {
      toast.error("User or password was wrong");
    }
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="bg-gray-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8 tracking-wide">
          Admin Panel Login
        </h2>
        <form className="space-y-6" onSubmit={handlesubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              value={input.email}
              onChange={handlechange}
              placeholder="admin@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={input.password}
              onChange={handlechange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white font-bold shadow-lg hover:from-indigo-700 hover:to-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
