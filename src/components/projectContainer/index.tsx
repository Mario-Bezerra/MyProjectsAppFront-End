import axios from "axios";
import { useEffect, useState } from "react";
import { Project, Task } from "../../models/Project";
import TasksCard from "../tasksContainer";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCard(){

    const [projects , setProjects] = useState<Project[]>([]);
    const [tasks , setTasks] = useState<Task[]>([]);

    useEffect(() => {

        axios.get(`http://localhost:1010/api/v1/project`)
            .then(response => {
                setProjects(response.data);
            })
    }, []);

    function handleClick(tasks : Task[]){
        setTasks(tasks);
    }

    return (
        <>
        <div className="container-fluid row">
            <div className="col-lg-3 col-md-3 col-sm-3">
            <h2 >Projects</h2>
                <table className="responsive-table" >
                    <thead className="table-header">
                        <tr>
                            <th className="col col-1">ID</th>
                            <th className="col col-2">Name</th>
                            <th className="col col-3">Description</th>
                            <th className="col col-4">Time Created</th>
                        </tr>
                    </thead>
                    <tbody className="table-row">
                       {projects.map(project => {
                        return (
                            <tr key={project.Id}>
                                <td className="col col-1">{project.Id}</td>
                                <td className="col col-2">{project.Name}</td>
                                <td className="col col-3">{project.Description}</td>
                                <td className="col col-4">{new Date(project.TimeCreated).toLocaleDateString()}</td>
                                <td>
                                <div onClick={() => {handleClick(project.Tasks)}}>
                                    <h4> TASKS </h4>
                                </div>
                                </td>
                            </tr>                 
                        )
                       } )}
                    </tbody>
                </table>

            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
            { tasks.length === 0 ? <h1> </h1> : <TasksCard task={tasks}/>}
            </div>
        </div>
        </>   
    )
}

export default ProjectCard;