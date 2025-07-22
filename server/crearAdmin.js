const { User } = require("./db/models"); // Ajustá el path a tu proyecto

async function crearAdmin() {
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
}

crearAdmin();
