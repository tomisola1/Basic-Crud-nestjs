import { IsArray, IsNumber, IsString } from "class-validator"

export class companyDto{
    @IsString()
    organization: string

    @IsArray()
    products: []

    @IsString()
    marketValue: string

    @IsString()
    address: string

    @IsString()
    ceo: string

    @IsString()
    country: string

    @IsNumber()
    noOfEmployees:number

    @IsArray()
    employees:[]
}