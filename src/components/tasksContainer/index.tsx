import { useEffect } from "react";
import { Task } from "../../models/Project";




function TasksCard( {task} : any){

    return (
        <div >
            <h2 >Tasks</h2>
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Name</th>
                            <th >Description</th>
                            <th>Employer</th>
                            <th>Status</th>
                            <th>Time Created</th>
                        </tr>
                    </thead>
                    <tbody>
                       {task.map(task => {
                        return (
                         <tr key={task.Id}>
                                <td >{task.Id}</td>
                                <td >{task.Name}</td>
                                <td >{task.Description}</td>
                                <td >{task.Employer.PersonalData.name}</td>
                                <td >{task.Status}</td>
                                <td >{new Date(task.TimeCreated).toLocaleDateString()}</td>
                        </tr>
                        )
                       } )}
                    </tbody>
                </table>

            </div>

        </div>

    )
}

export default TasksCard;