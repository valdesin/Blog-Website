const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const posts = [];

const app = express();

const homeStartingContent = "Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their.";

const aboutContent = "Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer.";
    
const contactContent = "No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry.";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home", {startContent: homeStartingContent});
});

app.get("/about", (req, res) => {
    res.render("about", {about: aboutContent});
});

app.get("/contact", (req, res) => {
    res.render("contact", {contact: contactContent});
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    const post = {
        postTitle: req.body.myPostTitle,
        postText: req.body.myPostText,
    };
    posts.push(post);
    
    console.log(posts);
    res.redirect("/")
});

app.listen(port, () => {
    console.log("Serever started on port 3000.")
});
