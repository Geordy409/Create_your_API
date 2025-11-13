import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

try {
  await db.authenticate();
  console.log("connexion has been established successfully");
} catch (e) {
  console.erro("Unable to connect to the database:", e);
}

export default {
  Sequelize,
  db,
};
