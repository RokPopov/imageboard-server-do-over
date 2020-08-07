const { Router } = express();

const User = require("../models").user;

const router = Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
