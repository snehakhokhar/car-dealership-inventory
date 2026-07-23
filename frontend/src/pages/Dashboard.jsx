import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await api.get("/vehicles");

      console.log(response.data);

      setVehicles(response.data.vehicles || response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const purchaseVehicle = async (id) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token : " ,token);

      await api.post(
        `/vehicles/${id}/purchase`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Vehicle Purchased!");
      fetchVehicles();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Purchase Failed");
    }
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      vehicle.make.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Vehicle Inventory</h1>

      <input
        type="text"
        placeholder="Search by make, model or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 p-3 border rounded-lg mb-6"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="bg-white rounded-xl shadow-md p-5"
            >
              <h2 className="text-2xl font-bold">
                {vehicle.make} {vehicle.model}
              </h2>

              <p className="mt-2">
                <strong>Category:</strong> {vehicle.category}
              </p>

              <p>
                <strong>Price:</strong> ₹{vehicle.price}
              </p>

              <p>
                <strong>Quantity:</strong> {vehicle.quantity}
              </p>

              <button
                disabled={vehicle.quantity === 0}
                onClick={() => purchaseVehicle(vehicle._id)}
                className={`mt-4 w-full py-2 rounded-lg text-white ${
                  vehicle.quantity === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-600"
                }`}
              >
                {vehicle.quantity === 0 ? "Out of Stock" : "Purchase"}
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-xl text-gray-500">
            No vehicles found
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;