
import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
database: "postgres",
username: 'postgres',
password: "Dpvinay@2209", 
port: 5432,
dialect: 'postgres',

});
export default sequelize;