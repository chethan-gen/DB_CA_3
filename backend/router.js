const express = require("express");
const mongoose = require("mongoose");

const {User,BookReview} = require("./schema");

const routes = express.Router();


routes.post("/user", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Please fill all the required fields" });
        }

        const newUser = new User({ name, email });
        const savedUser = await newUser.save();

        return res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (error) {
        console.error("Error while creating user:", error);
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});


routes.post("/reviews", async (req, res) => {
    try {
        const { title, author, review, rating } = req.body;

        if (!title || !author || !review || !rating) {
            return res.status(400).json({ message: "Please fill all the required fields" });
        }

        const newReview = new BookReview({ title, author, review, rating });
        const savedReview = await newReview.save();

        return res.status(201).json({ message: "Book review saved successfully", review: savedReview });
    } catch (error) {
        console.error("Error while saving review:", error);
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

module.exports = routes;
