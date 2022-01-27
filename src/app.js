import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import routes from "../routes/routes.js";


const app = express();

app.engine(
  "handlebars",
  engine({
    helpers: {
      markdown: (md) => marked(md),
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/", routes.home);
app.use("/movies", routes.movies);
app.use("/contact", routes.contact);
app.use("/covidinformation", routes.covidinformation);
app.use("/api/screenings", routes.screenings);


app.use("/static", express.static("./static"));

export default app;
