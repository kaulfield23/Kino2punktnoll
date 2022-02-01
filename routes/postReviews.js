import fetch from 'node-fetch'
import express from "express";
import { postData } from "../src/api.js";
const postReview_url = "https://lernia-kino-cms.herokuapp.com/api/reviews"

const router = express.Router();

/* router.post('/reviews' , async  (req,res ) => {
  res.status(200)
  res.send('Hello world')
    await fetch('https://lernia-kino-cms.herokuapp.com/api/reviews', {
  method: 'POST',
  mode: 'cors',
  credential: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(req.body)
  })
}) */


//Server logic to handle post from client and pass to CMS API
router.post('/', async (req, res) => {
  //res.status(200);
  // res.send('Testing');
  //const postData = await postData(postReview_url, req.body)
  postData(postReview_url, req.body).then(data => {
    
    console.log("from postRewur",data);
    res.status(200).send('test')
    
  });

})

export default router;

/* 
Todo:
[x] Klienten skickar data till mitt API
[] Hittar inte { postData } i api.js
[] 
https://lernia-kino-cms.herokuapp.com/api/reviews
*/