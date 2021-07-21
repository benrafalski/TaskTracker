import { useState } from "react"

const EditTask = ({ task, onUpdate }) => {
    const [text, setText] = useState((task.text))
    const [day, setDay] = useState(task.day)
    const [reminder, setReminder] = useState(task.reminder)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onUpdate({ text, day, reminder }, task.id)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default EditTask
