import dotenv from "dotenv";
dotenv.config();

import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";
import connectDB from "../config/db.js";

let token = "";
let vehicleId = "";

beforeAll(async () => {
  await connectDB();

  const email = `vehicle${Date.now()}@gmail.com`;

  // Register user
  await request(app)
    .post("/api/auth/register")
    .send({
      name: "Vehicle Tester",
      email,
      password: "123456"
    });

  // Login
  const login = await request(app)
    .post("/api/auth/login")
    .send({
      email,
      password: "123456"
    });

  token = login.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Vehicle API", () => {

  test("Add Vehicle", async () => {

    const response = await request(app)
      .post("/api/vehicles")
      .set("Authorization", token)
      .send({
        make: "Toyota",
        model: "Fortuner",
        category: "SUV",
        price: 4200000,
        quantity: 5
      });

    expect(response.statusCode).toBe(201);

    vehicleId = response.body.vehicle._id;

  });

  test("Get All Vehicles", async () => {

    const response = await request(app)
      .get("/api/vehicles");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);

  });

  test("Search Vehicle", async () => {

    const response = await request(app)
      .get("/api/vehicles/search?make=Toyota");

    expect(response.statusCode).toBe(200);

  });

  test("Update Vehicle", async () => {

    const response = await request(app)
      .put(`/api/vehicles/${vehicleId}`)
      .set("Authorization", token)
      .send({
        price: 4500000
      });

    expect(response.statusCode).toBe(200);

  });

  test("Purchase Vehicle", async () => {

    const response = await request(app)
      .post(`/api/vehicles/${vehicleId}/purchase`)
      .set("Authorization", token);

    expect(response.statusCode).toBe(200);

  });

});