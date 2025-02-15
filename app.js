const express = require("express");
const bodyParser = require("body-parser");
// const { engine } = require("express-handlebars");

const path = require("path");

const app = express();

// app.engine(".handlebars", engine({ extname: ".handlebars" }));

app.set("view engine", "ejs"); // view engine allows us to tell express that for every dynamic template we're trying to render, please use this engine registered here - in this case 'pug'.
app.set("views", "templates"); // views allows us to tell express where to find this dynamic views - views acts more like a directory.

// NB: now we're telling express that we wanna compile dynamic templates with the 'pug' engine and where to find these templates.

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).sendFile(path.join(__dirname, "templates", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
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
