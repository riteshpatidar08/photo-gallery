const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected!');
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });


app.use(UploadRoute);

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});


