import express from "express";
import {
  CustomerCreate,
  CustomerDelete,
  CustomerIndex,
  CustomerUpdate,
} from "../controllers/customers.controllers.js";

const router = express.Router();

//CRUD FUNCTIONALITY

//CREATE
router.post("/", CustomerCreate);

//READ
router.get("/", CustomerIndex);

//UPDATE
router.put("/:id", CustomerUpdate);

//DELETE
router.delete("/:id", CustomerDelete);

export default router;
