import { Employer } from "./Employer";
import { Project } from "./Project";

export type Task = {
    Id : string;
    Name : string;
    Project : Project;
    Dev : Employer;
    Status : string;
    TimeCreated:string;
    Description : string;
}