import Task from "./Task"
import EditTask from "./EditTask"
import Button from "./Button"

const Tasks = ({ tasks, onDelete, onRemind, showEditTask, onUpdate, showLocation, toggleLocation }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    key={task.id}
                    task={task} 
                    onDelete={onDelete} 
                    onRemind={onRemind}  
                    showEditTask={showEditTask} 
                    onUpdate={onUpdate}
                    showLocation={showLocation}
                    toggleLocation={toggleLocation}
                />
                
                
            ))}
        </>
    )
}

export default Tasks
