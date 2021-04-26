import Sequelize from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "root", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },

  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

