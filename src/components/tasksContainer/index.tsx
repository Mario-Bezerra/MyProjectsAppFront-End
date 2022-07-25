import { useEffect } from "react";
import { Task } from "../../models/Project";

function TasksCard( {task} : any){

    return (
        <div className="container-fluid row">
            <h2 >Tasks</h2>
            <div>
                <table className="col-12">
                    <thead>
                        <tr>
                            <th className="col-1">ID</th>
                            <th className="col-3">Name</th>
                            <th className="col-4">Description</th>
                            <th className="col-2">Employer</th>
                            <th className="col-1">Status</th>
                            <th className="col-1">Time Created</th>
                        </tr>
                    </thead>
                    <tbody>
                       {task.map(task => {
                        return (
                         <tr key={task.Id}>
                                <td className="col-1">{task.Id}</td>
                                <td className="col-3">{task.Name}</td>
                                <td className="col-4">{task.Description}</td>
                                <td className="col-1">{task.Employer.PersonalData.name}</td>
                                <td className="col-1">{task.Status}</td>
                                <td className="col-1">{new Date(task.TimeCreated).toLocaleDateString()}</td>
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