import express from "express";
import {screeningsLoad} from '../src/api.js';


const router = express.Router();

router.get("/",
async (req, res) =>{
    const screenings = await screeningsLoad();//uri for screenings
    res.json({
        data: screenings.map(data => {
          return {
            id: data.id,
            time: data.attributes.start_time,
            room: data.attributes.room,
            movies:{
              id: data.attributes.movie.data.id,
              title: data.attributes.movie.data.attributes.title,
            }
     
          }
        }),
    })
  })
  
  export default router;

 
