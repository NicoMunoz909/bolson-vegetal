require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../db/models");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send("Username or password missing");
  try {
    const user = await User.findOne({ where: { username } });
    if (user && user.validatePassword(password)) {
      const token = jwt.sign({ username, password }, process.env.TOKEN_SECRET);
      return res.send({ msg: "Logged In Succesfully", token });
    }
    return res.status(400).send("Contraseña incorrecta");
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

const register = async (req, res) => {
  try {
    const [admin, created] = await User.findOrCreate({
      where: { username: "admin" },
      defaults: {
        username: "elBolson",
        password: "admin1234", // El hook hashea esto
      },
      individualHooks: true, // Esto fuerza el hook en findOrCreate también
    });

    if (created) {
      console.log("✅ Usuario admin creado correctamente");
    } else {
      console.log("⚠️ Ya existe un usuario admin");
    }
  } catch (err) {
    console.error("❌ Error creando admin:", err);
  }
};

module.exports = { login, register };
