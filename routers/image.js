const { Router } = require("express");

const Image = require("../models").image;

const router = Router();

router.get("/", async (req, res) => {
  try {
    const image = await Image.findAll();
    res.json(image);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const image = await Image.create(req.body);
    res.json(image);
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;
