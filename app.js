// import "dotenv/config";
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";
// import http from "http";


// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended:true })) ;

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//    })
// );

// app.use(express.static("public"));

// // app.use("/")

// const PORT = process.env.PORT ?? 3000

// app.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
// })








const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sample API route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });``