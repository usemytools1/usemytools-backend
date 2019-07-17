const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const SessionStore = require("connect-session-knex")(session);

const authRouter = require("../auth/authRouter.js");
const userRouter = require("../users/usersRouter.js");
const toolsRouter = require("../tools/toolsRouter.js");


const server = express();

const sessionConfig = {
  name: "session",
  secret: "super secret",
  cookie: {
    maxAge: 60 * 60 * 1000,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new SessionStore({
    knex: require("../data/dbConfig.js"),
    tablename: "sessions",
    createtable: true,
    clearInterval: 60 * 60 * 1000
  })
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/tools", toolsRouter);


server.get("/", (req, res) => {
  res.send("Online");
});

module.exports = server;