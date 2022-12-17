require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("stripe")(process.env.PUBLISHED_SECRET_KEY);

console.log(process.env.PUBLISHED_SECRET_KEY);

// app config
const app = express();

// API body
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payment/create", async (req, res) => {
    console.log(req.query);
});

exports.api = functions.https.onRequest(app);

// http function initialized (http://127.0.0.1:5001/lessons-87cfb/us-central1/api)