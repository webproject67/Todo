import { Dialect, Sequelize } from 'sequelize';
import { DEVELOPMENT } from '../utils/const';

const dbUrl = process.env.DATABASE_URL as string;
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;
const dbDialect = process.env.DB_DIALECT as Dialect;

const getSequelizeDev = () =>
  new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
  });

const getSequelizeProd = () =>
  new Sequelize(dbUrl, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

const sequelize =
  process.env.NODE_ENV === DEVELOPMENT ? getSequelizeDev() : getSequelizeProd();

export default sequelize;
