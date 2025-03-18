import express from "express";
import ContactController from "../controller/contactController.js";
const router = express.Router();


router.post("/plumeriacontact", ContactController.plumeriaContactMail);


export default router;
