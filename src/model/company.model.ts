import {AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table
export default class Companydata extends Model<Companydata>{
    
    @Column({primaryKey:true, autoIncrement:true, type: DataType.INTEGER, unique:true})
    id:number

    @Column({
        allowNull:false,
        type:DataType.STRING(255)
    })
    organization:string

    
    @Column({
        allowNull:false,
        type:DataType.ARRAY(DataType.STRING)
    })
    products:[]

    @Column({
        allowNull:false,
        type:DataType.STRING(128)
    })
    marketValue: string

    @Column({
        allowNull:false,
        type:DataType.STRING(255)
    })
    address: string

    @Column({
        allowNull:false,
        type:DataType.STRING(128)
    })
    ceo: string

    @Column({
        allowNull:false,
        type:DataType.STRING(128)
    })
    country: string

    @Column({
        allowNull:false,
        type:DataType.INTEGER
    })
    noOfEmployees:number

    @Column({
        allowNull:false,
        type:DataType.ARRAY(DataType.STRING)
    })
    employees:[]

    @Column({
        allowNull:false,
    })
    @CreatedAt
    createdAt: Date

    @UpdatedAt
    @Column({
        allowNull:false,
    })
    updatedAt: Date
}