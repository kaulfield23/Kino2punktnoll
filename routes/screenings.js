import express from "express";
import {screeningsLoad} from '../src/api.js';


const router = express.Router();

router.get("/",
async (req, res) =>{
    const screenings = await screeningsLoad();//uri for screenings
    res.json({
        data: screenings.map(data => {
          return {
            titel: data.attributes.movie.data.attributes.title,
            time: data.attributes.start_time,
            room: data.attributes.room,
            
          }
        }),
    })
  })
  export default router;

 
