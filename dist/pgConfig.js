"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: "postgres",
    username: 'postgres',
    password: "Dpvinay@2209",
    port: 5432,
    dialect: 'postgres',
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map