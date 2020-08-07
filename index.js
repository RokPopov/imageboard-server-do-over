const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

const PORT = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();
app.use(jsonParser);

app.use("/images", imageRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}.`));
