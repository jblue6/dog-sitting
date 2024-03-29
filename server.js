// 52.72.145.109 bluedogsitting.uk/
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

// BodyParser Middleware
app.use(express.json());

// DB config
const db = config.get("mongoURI");

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));

// use routes
app.use("/api/data", require("./routes/api/data"));
app.use("/api/prices", require("./routes/api/prices"));
app.use("/api/contactDetails", require("./routes/api/contactDetails"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
