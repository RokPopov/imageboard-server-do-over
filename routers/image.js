const { Router } = require("express");
const { toData } = require("../auth/jwt.js");

const Image = require("../models").image;

const router = Router();

// router.get("/", async (req, res) => {
//   try {
//     const image = await Image.findAll();
//     res.json(image);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", (req, res, next) => {
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;

  Image.findAndCountAll({ limit, offset })
    .then((result) => res.send({ images: result.rows, total: result.count }))
    .catch((error) => next(error));
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

router.get("/:imgId", async (req, res, next) => {
  try {
    const imgId = req.params.imgId;
    const image = await Image.findByPk(imgId);
    res.json(image);
  } catch (error) {
    console.log(error);
    next();
  }
});

router.get("/auth/messy", async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
    } catch (e) {
      res.status(400).send("Invalid JWT token");
    }
    const allImages = await Image.findAll();
    res.json(allImages);
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
});

module.exports = router;
