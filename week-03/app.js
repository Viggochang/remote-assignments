const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/getData", (req, res) => {
    const { query } = req;
    res.send(getSum(query));
});

app.get("/myName", (req, res) => {
    const { username } = req.cookies;
    if (username) {
        res.send(`<h1>Hello ${username}</h1>`);
    } else {
        res.render("trackName");
    }
});

app.get("/trackName", (req, res) => {
    const { username } = req.query;
    if (username) {
        res.cookie("username", username);
    }
    res.redirect("/myName");

    // const usernameCookies = req.cookies.username;
    // if (usernameCookies) {
    //     res.redirect("/myName");
    // }
    // else {
    //     res.render("trackName");
    // }
})

const port = 3000;
app.listen(port, () => {
    console.log(`This application is running on localhost:${port}!`);
});

function sum(num) {
    const arr = Array(num).fill().map((val, index) => index + 1);
    return arr.reduce((acc, cur) => acc + cur, 0);
};

function getSum(data) {
    if (Object.keys(data).length === 0) {
        return "<h1>Lack of Parameter</h1>";
    } else {
        const { number } = data;
        if (!parseInt(number)) {
            return "<h1>Wong Parameter</h1>";
        } else {
            const num = parseInt(number);
            let ans = sum(num);
            return `<h1>The answer is ${ans}</h1>`;
        }
    }
};