import { FaTimes } from 'react-icons/fa'
import Button from './Button'
import EditTask from './EditTask'

const Task = ({ task, onDelete, onRemind, onEdit, showEditTask, onUpdate }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor:'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
            <Button color='gray' text='Details'/>
            <Button color='steelblue' text={task.reminder ? 'Set as Event' : 'Set as Reminder'} onClick={() => onRemind(task.id)}/>
            {showEditTask && <EditTask task={task} onUpdate={onUpdate}/>}
        </div>
    )
}

export default Task
