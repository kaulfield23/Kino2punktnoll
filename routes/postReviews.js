import fetch from 'node-fetch';
import express from 'express';
import api from '../src/api.js';
import JWT from 'jsonwebtoken';

const postReview_url = 'https://lernia-kino-cms.herokuapp.com/api/reviews';

const router = express.Router();

//Server logic to handle post from client and pass to CMS API
router.post('/', async (req, res) => {
  if (!req.headers['authorization']) {
    return res.status(401).end();
  }
  const reqToken = req.headers['authorization'].split(' ')[1];
  let token = JWT.decode(reqToken, 'thisisapassword');

  if (
    Boolean(token !== null) &&
    Boolean(req.body.data.comment) &&
    Boolean(req.body.data.author) &&
    Boolean(req.body.data.rating >= 0 && req.body.data.rating <= 5)
  ) {
    api.postData(postReview_url, req.body).then(() => {
      return res.status(201).end();
    });
  } else {
    return res.status(401).end();
  }
});
export default router;
/* 
Validera recensioner innan de skickas vidare till CMS, så att alla nödvändiga fält är 
ifyllda och rating är 0-5. 
Svara med lämplig felkod. Skriv tester som verifierar att detta fungerar.
*/
