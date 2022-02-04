import fetch from 'node-fetch';
import express from 'express';
import api from '../src/api.js';
import JWT from 'jsonwebtoken';

const postReview_url = 'https://lernia-kino-cms.herokuapp.com/api/reviews';

const router = express.Router();

//Server logic to handle post from client and pass to CMS API
//Server logic to handle post from client and pass to CMS API
router.post("/", async (req, res) => {
  if (!req.headers["authorization"]) {
    return res.status(401).end();
  }
  const reqToken = req.headers["authorization"].split(" ")[1];
  let token = JWT.decode(reqToken, "thisisapassword");

  if (token === null) {
    return res.status(401).end();
  }

  api.postData(postReview_url, req.body).then((data) => {
    console.log(postReview_url);
    console.log("from postRewur", data);
    res.status(200).send("test");
  });
});

export default router;
/* 
Validera recensioner innan de skickas vidare till CMS, så att alla nödvändiga fält är 
ifyllda och rating är 0-5. 
Svara med lämplig felkod. Skriv tester som verifierar att detta fungerar.
*/
