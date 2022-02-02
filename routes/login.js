import express from "express";
import loginFunc from '../src/loginFunc.js'
import { LocalStorage } from 'node-localstorage';

const router = express.Router();

//render login page
router.get("/", (req, res) => {
    res.render('./partials/login');
});

//check name and password and create the jwt token
//and save it to node-localStorage
router.post("/getUser", (req, res) => {
    loginFunc(req, res);
})

//clear the node-localstorage token
router.get("/logout", (req, res) => {
    const localStorage = new LocalStorage('./scratch');
    localStorage.removeItem('token');
    res.status(200).end();
})

export default router;