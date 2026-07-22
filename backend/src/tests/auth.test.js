import dotenv from "dotenv";
dotenv.config();

import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";
import connectDB from "../config/db.js";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API", () => {

  test("Register a new user", async () => {

    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: `test${Date.now()}@gmail.com`,
        password: "123456"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);

  });

});

