const request = require("supertest");
const app = require("../app");

describe("Authentication API", () => {

    test("POST /api/auth/register should return 201", async () => {

        const response = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Sneha",
                email: "sneha@gmail.com",
                password: "123456"
            });

        expect(response.statusCode).toBe(201);
         expect(response.body).toEqual({
            message: "User registered successfully"
        });
    });

});