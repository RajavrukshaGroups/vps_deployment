import express from "express";
import ContactController from "../controller/contactController.js";
const router = express.Router();


router.get("/plumeriacontact", ContactController.plumeriaContactMail);


export default router;
