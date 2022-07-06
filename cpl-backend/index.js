const express = require("express");
//const engineeringRouter = require("./controllers/engineering");
const apiRouter = require("./controllers/api");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/api/", apiRouter);
//app.use("/api/engineering", engineeringRouter);

app.use(express.static("./static/"));
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Starting server on ${PORT}`);
});