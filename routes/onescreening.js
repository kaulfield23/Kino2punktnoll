import express from "express";
import { screeningsLoad } from '../src/api.js';


const router = express.Router();

router.get("/:sId",
    async (req, res) => {
        const oneScreening = await screeningsLoad(req.params.sId);

        let thisVisit = new Date();
        const jsonDate = thisVisit.toJSON();

        if (oneScreening) {
            res.json({
                data: oneScreening
                    .filter(data => jsonDate < data.attributes.start_time)
                    .map(data => {
                        return {
                            id: data.id,
                            time: data.attributes.start_time,
                            room: data.attributes.room,
                        }
                    })
            })
        }
    })

export default router;



