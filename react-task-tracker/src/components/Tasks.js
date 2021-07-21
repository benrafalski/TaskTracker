import Task from "./Task"
import EditTask from "./EditTask"
import Button from "./Button"

const Tasks = ({ tasks, onDelete, onRemind, onEdit, showEditTask, onUpdate }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    key={task.id}
                    task={task} 
                    onDelete={onDelete} 
                    onRemind={onRemind} 
                    onEdit={onEdit} 
                    showEditTask={showEditTask} 
                    onUpdate={onUpdate}
                />
                
                
            ))}
        </>
    )
}

export default Tasks
