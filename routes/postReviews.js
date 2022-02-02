import fetch from "node-fetch";
import express from "express";
import { LocalStorage } from "node-localstorage";
import { postData } from "../src/api.js";
const localStorage = new LocalStorage("./scratch");

// router.post('/reviews', async(req, res) => {

//     const reqToken = req.headers["authorization"].split(":")[1].trim();
//     let storedToken = localStorage.getItem('token');

//     if (reqToken !== storedToken) {
//         return res.status(401).end();
//     }

//     await fetch('https://lernia-kino-cms.herokuapp.com/api/reviews', {
//         method: 'POST',
//         mode: 'cors',
//         credential: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(req.body)
//     })

//     res.status(200).end();

const postReview_url = "https://lernia-kino-cms.herokuapp.com/api/reviews";

const router = express.Router();

//Server logic to handle post from client and pass to CMS API
router.post("/", async (req, res) => {
  const reqToken = req.headers["authorization"].split(":")[1].trim();
  let storedToken = localStorage.getItem("token");

  if (reqToken !== storedToken) {
    return res.status(401).end();
  }

  postData(postReview_url, req.body).then((data) => {
    console.log("from postRewur", data);
    res.status(200).send("test");
  });
});

export default router;
