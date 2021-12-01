import {
  Model,
  DataTypes,
  Optional } from 'sequelize'
import { sequelizeConnection } from './db'

// These are all the attributes in the User model
interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
type UserCreationAttributes = Optional<UserAttributes, "id">

class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static associations: {
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize: sequelizeConnection
  }
);

export { User };
