import { Sequelize } from "sequelize";

const db = new Sequelize('dbwp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;