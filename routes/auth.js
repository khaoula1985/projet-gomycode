const { Router } = require("express");
const { login, register,logout } = require("../controllers/authcontrollers");
const Authrouter = Router();

Authrouter.post("/auth/login", login);
Authrouter.post("/auth/register", register);
Authrouter.post("/auth/logout", logout);

module.exports = Authrouter; 