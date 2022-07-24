export type Employer = {
    id : number;
    PersonalData : {
        name:string;
        cpf : string;
        adress : {
            cep : string;
            localidade : string;
            uf : string;
        }
        birthDate : string;
    };
    EnterpriseData : {
        username:string;
        cargo:string;
    }
    Project : {
        id : string;
        Name : string;
        TimeCreated:string;
        Description : string;
    }

}