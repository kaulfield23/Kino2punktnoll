import JWT from 'jsonwebtoken';
import { LocalStorage } from 'node-localstorage';
const localStorage = new LocalStorage('./scratch');

function inUserList(req) {
    const username = [
        'richard',
        'haeju',
        'johan',
        'carola',
        'pontus',
        'roger'
    ];
    const password = 'groupd';

    const authorization = atob(req.headers['authorization'].slice(6));
    const inputUserName = authorization.split(':')[0];
    const inputPassWord = authorization.split(':')[1];

    if (username.includes(inputUserName) && password == inputPassWord) {
        return inputUserName;
    } else {
        return null;
    }
}

export function loginFunc(req, res) {
    let username = inUserList(req);
    if (username) {
        const token = JWT.sign({
            username: username,
        }, 'thisisapassword');

        //save token in node-localStorage
        localStorage.setItem('token', token);
        //send token to response
        res.status(200).send({
            token
        })
    } else {
        res.status(401).end()
    }
    console.log(username)
}

export default loginFunc;