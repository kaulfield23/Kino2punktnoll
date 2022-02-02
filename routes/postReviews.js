import fetch from "node-fetch";
import express from "express";
import { LocalStorage } from "node-localstorage";
import { postData } from "../src/api.js";
const localStorage = new LocalStorage("./scratch");
const postReview_url = "https://lernia-kino-cms.herokuapp.com/api/reviews";

const router = express.Router();

//Server logic to handle post from client and pass to CMS API
router.post("/", async (req, res) => {
  const reqToken = req.headers["authorization"].split(":")[1].trim();
  let storedToken = localStorage.getItem("token");

  if (reqToken !== storedToken) {
    return res.status(401).end();
  }

  if (req.body.data.comment != "" && req.body.data.author != "" && req.body.data.rating != 'number') {
    postData(postReview_url, req.body).then(() => {
      return res.status(201).end();
    })
  } else {
    res.status(400).end(); 
  }
});

export default router;