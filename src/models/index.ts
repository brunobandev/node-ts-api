import Sequelize from "sequelize";
import { initUser } from "./user";

const config = require('../config/database.json');

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

const db = {
  sequelize,
  Sequelize,
  User: initUser(sequelize),
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;