const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const result = await authController.createUser(req.body.email, req.body.password);
        res.status(201).json({ message: "User created successfully", user: result });
    } catch (error) {
        res.status(400).json({ message: error.message || "Something went wrong" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await authController.loginUser(req.body.email, req.body.password);
        res.status(200).json({ message: "Logined", user });
    } catch (error) {
        res.status(401).json({ message: error.message || "Login failed" });
    }
});

module.exports = router;