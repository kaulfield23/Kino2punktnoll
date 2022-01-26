import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("./partials/covidinformation");
});

export default router;
