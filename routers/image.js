const { Router } = express();

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

module.exports = router;
