import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const Task = ({ task, onDelete, onRemind}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor:'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
            <Button color='gray' text='Details'/>
            <Button color='aqua' text='Edit'/>
            <Button color='steelblue' text={task.reminder ? 'Set as Event' : 'Set as Reminder'} onClick={() => onRemind(task.id)}/>
        </div>
    )
}

export default Task
