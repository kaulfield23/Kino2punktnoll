import express from "express";
import { screeningsLoad } from '../src/api.js';
import { filterOneScreening } from '../src/one_screeningFilter.js';

const router = express.Router();

router.get("/:sId",
    async (req, res) => {
        //fetching data from CMS-api
        res.json(await filterOneScreening(req.params.sId, screeningsLoad));

    })

export default router;


