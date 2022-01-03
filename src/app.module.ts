import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { companyProviders } from './app.provider';
import { AppService } from './app.service';
import { databaseProviders } from './config/database.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders, ...companyProviders],
})
export class AppModule {}
