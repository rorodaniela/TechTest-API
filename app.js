const express = require("express");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`listen at port ${PORT}`);
});
