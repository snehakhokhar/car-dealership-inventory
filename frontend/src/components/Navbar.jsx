import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        
        <Link to="/" className="text-2xl font-bold">
           Car Dealership
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          {token && user?.role === "admin" && (
            <Link to="/admin" className="hover:text-gray-200">
              Admin Dashboard
            </Link>
          )}

          {!token ? (
            <>
              <Link to="/register" className="hover:text-gray-200">
                Register
              </Link>

              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </>
          ) : (
            <>
              <span>Welcome, {user?.name}</span>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;