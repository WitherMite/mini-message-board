const { Router } = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there, this is a simple message board!",
    user: "Server",
    added: new Date(),
  },
];

router
  .get("/", (req, res) => {
    res.render("index", { messages: messages });
  })
  .get("/message", (req, res) => {
    res.render("message", { message: messages[req.query.n] });
  })
  .get("/new", (req, res) => {
    res.render("form");
  })
  .post("/new", (req, res) => {
    messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
    });
    res.redirect("/");
  });

module.exports = router;
