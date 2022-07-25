     export type PersonalData = {
        name: string;
    }

    export type EnterpriseData = {
        cargo: string;
    }

    export type Employer = {
        id: number;
        PersonalData: PersonalData;
        EnterpriseData: EnterpriseData;
    }

    export type Task = {
        Id: number;
        Name: string;
        Description: string;
        Employer: Employer;
        Status: string;
        TimeCreated : string;
    }

    export type Project = {
        Id: number;
        Name: string;
        Tasks: Task[];
        Employers: Employer[];
        TimeCreated: string;
        Description : string;
    }
