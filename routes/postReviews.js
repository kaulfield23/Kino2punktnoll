import fetch from 'node-fetch'
import express from "express";
<<<<<<< HEAD
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

=======
import api from "../src/api.js";
import { LocalStorage } from 'node-localstorage';
const localStorage = new LocalStorage('./scratch');

const router = express.Router();

router.post('/reviews', async(req, res) => {

    const reqToken = req.headers["authorization"].split(":")[1].trim();
    let storedToken = localStorage.getItem('token');
    console.log(localStorage.getItem('token'), 'token in reviews');

    if (reqToken !== storedToken) {
        return res.status(401).end();
    }
<<<<<<< HEAD
>>>>>>> 56617da (node-localstorage but it still remains in server)
=======

    await fetch('https://lernia-kino-cms.herokuapp.com/api/reviews', {
        method: 'POST',
        mode: 'cors',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body)
    })

    res.status(200).end();
>>>>>>> 4b4d736 (store the token to local storage and compare with server token)
})

export default router;

/* 
Todo:
[x] Klienten skickar data till mitt API
[] Hittar inte { postData } i api.js
[] 
https://lernia-kino-cms.herokuapp.com/api/reviews
*/