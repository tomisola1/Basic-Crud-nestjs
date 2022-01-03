import Companydata from "./model/company.model";

export const companyProviders = [
    {
      provide: 'company_repository',
      useValue: Companydata,
    },
];