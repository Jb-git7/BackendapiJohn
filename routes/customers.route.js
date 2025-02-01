import express from "express";

const router = express.Router();

//CRUD FUNCTIONALITY

//CREATE
router.post("/", (req, res) => {
  res.send("Create customers");
});

//READ
router.get("/", (req, res) => {
  res.send("Get all customers");
});

//UPDATE
router.put("//:id", (req, res) => {
  res.send("Update customers");
});

//DELETE
router.delete("//:id", (req, res) => {
  res.send("Delete customers");
});

export default router;
