import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { companyDto } from './company.dto';
import Companydata from './model/company.model';

@Controller('company')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createProperty(
    @Body() companyDto:companyDto,
  ):Promise<Companydata>{
    return this.appService.createCompany(companyDto)
  }

  @Get()
  @HttpCode(200)
  getAllCompanies():Promise<Companydata[]>{
    return this.appService.getAllCompanyData()
  }

  @Get('/:id')
  @HttpCode(200)
  getSingleCompany(@Param('id') id:number):Promise<Companydata>{
    return this.appService.getSingleCompanies(id)
  }

  @Patch('/:id')
  @HttpCode(200)
  updateCompany(@Param('id') id:number, @Body() companyDto:companyDto):Promise<Companydata>{
    return this.appService.updateCompanyData(id, companyDto)
  }

  @Delete('/:id')
  deleteCompany(@Param('id') id:number){
    return this.appService.deleteCompany(id)
  }
}
