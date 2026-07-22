import Vehicle from "../models/Vehicles.js";


export const addVehicle = async (req, res) => {
    try {
        const { make, model, category, price, quantity } = req.body;

    const vehicle = await Vehicle.create({
      make,
      model,
      category,
      price,
      quantity
    });

    res.status(201).json({
      success: true,
      message: "Vehicle added successfully",
      vehicle
    });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getVehicles = async (req, res) => {
    try {
    const vehicles = await Vehicle.find();

    res.status(200).json({
      success: true,
      count: vehicles.length,
      vehicles
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const searchVehicles = async (req, res) => {
    try {
    const { make, model, category, minPrice, maxPrice } = req.query;

    let filter = {};

    if (make) {
      filter.make = { $regex: make, $options: "i" };
    }

    if (model) {
      filter.model = { $regex: model, $options: "i" };
    }

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    const vehicles = await Vehicle.find(filter);

    res.status(200).json({
      success: true,
      count: vehicles.length,
      vehicles
    });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateVehicle = async (req, res) => {
    try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found"
      });
    }

    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      vehicle: updatedVehicle
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteVehicle = async (req, res) => {
    try {
      const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found"
      });
    }

    await vehicle.deleteOne();

    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully"
    });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const purchaseVehicle = async (req, res) => {
    try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found"
      });
    }

    if (vehicle.quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Vehicle is out of stock"
      });
    }

    vehicle.quantity -= 1;

    await vehicle.save();

    res.status(200).json({
      success: true,
      message: "Vehicle purchased successfully",
      vehicle
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const restockVehicle = async (req, res) => {
    try {
    const { quantity } = req.body;

    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found"
      });
    }

    vehicle.quantity += Number(quantity);

    await vehicle.save();

    res.status(200).json({
      success: true,
      message: "Vehicle restocked successfully",
      vehicle
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};