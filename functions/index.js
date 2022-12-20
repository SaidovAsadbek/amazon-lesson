require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.PUBLISHED_SECRET_KEY);

// app config
const app = express();

// API body
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payment/create", async (req, res) => {
    const total = req.query.total;
    console.log(total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    console.log(paymentIntent.client_secret);

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);

// http function initialized (http://127.0.0.1:5001/lessons-87cfb/us-central1/api)
