import { Sequelize } from 'sequelize-typescript'
import Companydata from 'src/model/company.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'company_db',
      });
      sequelize.addModels([Companydata]);
      await sequelize.sync();
      return sequelize;
    },
  },
];