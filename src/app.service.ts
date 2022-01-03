import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import { companyDto } from './company.dto';
import Companydata from './model/company.model';
import { Sequelize } from 'sequelize';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(
    @Inject('company_repository')
    private companyRepository: typeof Companydata
  ){}

  async createCompany(companyDto:companyDto):Promise<Companydata>{
    try {
      const {organization, products, marketValue, address, ceo, country, noOfEmployees, employees} = companyDto
    
      const companyInfo = new Companydata()
      companyInfo.organization = organization
      companyInfo.products = products
      companyInfo.marketValue = marketValue
      companyInfo.address = address
      companyInfo.ceo = ceo
      companyInfo.country = country
      companyInfo.noOfEmployees = noOfEmployees
      companyInfo.employees = employees
      await companyInfo.save()
      
      return companyInfo

    } catch (error) {
      console.log(error)
      return error
    }
    
  }

  async getAllCompanyData():Promise<Companydata[]>{
    const companies = await Companydata.findAll()
    return companies
  }

  async getSingleCompanies(id:number):Promise<Companydata>{
    const company = await Companydata.findOne({where:{id}})
    if(!company){
      throw new NotFoundException(`company of id ${id} is not found`)
    }
    return company
  }

  async updateCompanyData(id:number, companyDto:companyDto):Promise<Companydata>{
    try {
      const foundCompany = await this.getSingleCompanies(id)
      const {organization, products, marketValue, address, ceo, country, noOfEmployees, employees} = companyDto
      foundCompany.organization = organization || foundCompany.organization
      foundCompany.products = products || foundCompany.products
      foundCompany.marketValue = marketValue || foundCompany.marketValue
      foundCompany.address = address || foundCompany.address
      foundCompany.ceo = ceo || foundCompany.ceo 
      foundCompany.country = country || foundCompany.country
      foundCompany.noOfEmployees = noOfEmployees || foundCompany.noOfEmployees
      foundCompany.employees = employees || foundCompany.employees
      const updated = await foundCompany.save()
     return updated
    } catch (error) {
      console.log(error)
      return error
    }
    
  }

  async deleteCompany(id:number){
    const foundCompany = await Companydata.destroy({where:{id}})
      if(!foundCompany){
        throw new NotFoundException(`company of id ${id} is not found`)
      }

  
  }

}
