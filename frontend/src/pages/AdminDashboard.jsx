import {useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function AdminDashboard() {
  const navigate = useNavigate(); 
  const [vehicle, setVehicle] = useState({
    make: "",
    model: "",
    category: "",
    price: "",
    quantity: "",
  });
 const [vehicles, setVehicles] = useState([]);
 useEffect(() => {
  fetchVehicles();
}, []);

 const fetchVehicles = async () => {
  try {
    const response = await api.get("/vehicles");
    setVehicles(response.data.vehicles);
  } catch (err) {
    console.log(err);
  }
};

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post("/vehicles", vehicle, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Vehicle Added Successfully!");
      fetchVehicles();
      setVehicle({
        make: "",
        model: "",
        category: "",
        price: "",
        quantity: "",
      });

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to add vehicle");
    }
  };
  const deleteVehicle = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await api.delete(`/vehicles/${id}`, {
      headers: {
        Authorization:  `Bearer ${token}`,
      },
    });

    alert("Vehicle Deleted Successfully!");

    fetchVehicles();
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Delete Failed");
  }
};
const restockVehicle = async (id) => {
  const quantity = prompt("Enter quantity to add:");

  if (!quantity || Number(quantity) <= 0) return;

  try {
    const token = localStorage.getItem("token");

    await api.post(
      `/vehicles/${id}/restock`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Vehicle Restocked Successfully!");

    fetchVehicles();
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Restock Failed");
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Vehicle
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="make"
            placeholder="Make"
            value={vehicle.make}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            value={vehicle.model}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={vehicle.category}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={vehicle.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={vehicle.quantity}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add Vehicle
          </button>

        </form>
        <hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  All Vehicles
</h2>

<div className="grid md:grid-cols-2 gap-4">

  {vehicles.map((vehicle) => (

    <div
      key={vehicle._id}
      className="border rounded-lg p-4 shadow"
    >

      <h3 className="text-xl font-bold">
        {vehicle.make} {vehicle.model}
      </h3>

      <p>Category: {vehicle.category}</p>

      <p>Price: ₹{vehicle.price}</p>

      <p>Quantity: {vehicle.quantity}</p>

      <div className="flex flex-col gap-2 mt-4">

        <button
          onClick={() => navigate(`/update/${vehicle._id}`)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>

        <button
          onClick={() => deleteVehicle(vehicle._id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

        <button
        onClick={()=> restockVehicle(vehicle._id)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Restock
        </button>

      </div>

    </div>

  ))}

 </div>

</div>

</div>
  );
}

export default AdminDashboard;