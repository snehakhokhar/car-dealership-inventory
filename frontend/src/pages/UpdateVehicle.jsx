import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

function UpdateVehicle() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
  fetchVehicle();
}, []);

  const fetchVehicle = async () => {
  try {

    const response = await api.get(`/vehicles/${id}`);

    setMake(response.data.vehicle.make);
    setModel(response.data.vehicle.model);
    setCategory(response.data.vehicle.category);
    setPrice(response.data.vehicle.price);
    setQuantity(response.data.vehicle.quantity);

  } catch (err) {
    console.log(err);
  }
};
const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await api.put(
      `/vehicles/${id}`,
      {
        make,
        model,
        category,
        price,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Vehicle Updated Successfully!");

    navigate("/admin");
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Update Failed");
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Upadate Vehicle
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">

          <input
            type="text"
            name="make"
            placeholder="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            value={model}
            onChange={(e)=>setModel(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add Vehicle
          </button>

        </form>
        </div>
        </div>
  );
}

export default UpdateVehicle;