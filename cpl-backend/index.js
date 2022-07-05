const express = require("express");
const engineeringRouter = require("./controllers/engineering");


const app = express();

app.use("/api/engineering", engineeringRouter);

app.use(express.static("./static/"));
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Starting server on ${PORT}`);
});