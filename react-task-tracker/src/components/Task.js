import { FaTimes } from 'react-icons/fa'
import Button from './Button'
import EditTask from './EditTask'

const Task = ({ task, onDelete, onRemind, showEditTask, onUpdate, showLocation, toggleLocation }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>
                {task.text} 
                <FaTimes 
                    style={{ color: 'red', cursor:'pointer' }} 
                    onClick={() => onDelete(task.id)} 
                />
            </h3>
            <p>{task.day}</p>
            <Button 
                color='gray'  
                text='Show Location'
                onClick={() => toggleLocation()}
            />
            <Button 
                color={task.reminder ? 'steelblue' : 'cadetblue'} 
                text={task.reminder ? 'Set as Event' : 'Set as Reminder'} 
                onClick={() => onRemind(task.id)}
            />
            {showEditTask 
                && <EditTask 
                    task={task} 
                    onUpdate={onUpdate}
                />
            }
            {showLocation && <p>Location</p>}
        </div>
    )
}

export default Task
