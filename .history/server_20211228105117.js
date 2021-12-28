const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const path = require("path");
const passportSetup = require("./passport.js");
const passport = require("passport");
const authRoute = require("./routes/auth.js");
const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is listening on port:http://localhost:${PORT}`)
);
