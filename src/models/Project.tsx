import { Employer } from "./Employer";
import { Task } from "./Task";

export type Project = {
    Id:string;
    Name:string;
    Tasks:Array<Task>;
    Employers : Array<Employer>;
    TimeCreated:string;
    Description : string;
}