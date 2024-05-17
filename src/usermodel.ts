import { Model, DataTypes } from 'sequelize';
import sequelize  from './pgConfig';

class Order extends Model {
  public id!: number;
  public orderID!: string;
}

Order.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  orderID: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  tableName: 'orders',
  sequelize,
});

export default Order;
