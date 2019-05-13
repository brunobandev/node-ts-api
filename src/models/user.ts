import { Sequelize } from 'sequelize'

interface UserAttributes {
    id?: string;
    email: string;
}

type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes;
type UserModel = Sequelize.Model<UserInstance, UserAttributes>;

export function initUser (sequalize: Sequelize.Sequelize): UserModel {
  const attributes: SequelizeAttributes<UserAttributes> = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    email: { type: Sequelize.STRING, allowNull: false }
  }
  const User = sequalize.define<UserInstance, UserAttributes>('Users', attributes)
  return User
};
