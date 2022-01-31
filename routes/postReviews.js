import fetch from 'node-fetch'
import express from "express";
import api from "../src/api.js";

const router = express.Router();

router.post('/reviews' , async  (req,res ) => {
  res.status(200);
  console.log(req.body);
  await fetch('https://lernia-kino-cms.herokuapp.com/api/reviews', {
  method: 'POST',
  mode: 'cors',
  credential: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(req.body)
  })
})


export default router;