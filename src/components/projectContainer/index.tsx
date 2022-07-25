import axios from "axios";
import { useEffect, useState } from "react";
import { Project, Task } from "../../models/Project";
import TasksCard from "../tasksContainer";

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
        <div >
            <h2 >Projects</h2>
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Name</th>
                            <th >Description</th>
                            <th>Time Created</th>
                        </tr>
                    </thead>
                    <tbody>
                       {projects.map(project => {
                        return (
                            <tr key={project.Id}>
                                <td >{project.Id}</td>
                                <td >{project.Name}</td>
                                <td >{project.Description}</td>
                                <td >{new Date(project.TimeCreated).toLocaleDateString()}</td>
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
                
        </div>
        { tasks.length === 0 ? <h1> </h1> : <TasksCard task={tasks}/>}
        </>   
    )
}

export default ProjectCard;