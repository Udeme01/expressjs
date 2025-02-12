const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// next(); // allows the request to continue to the next middleware in line;

// const server = http.createServer(app);
// server.listen(3000);

// other http words below...
// app.delete;
// app.patch;
// app.put;
// app.post;
// app.get;
