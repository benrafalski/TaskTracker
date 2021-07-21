import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAddTask, showEditTask, onEdit }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div className='header-btn'>
                {location.pathname === '/' 
                    && <Button 
                        color={showAddTask ? 'red' : 'green'} 
                        text={showAddTask ? 'Close' : 'Add'} 
                        onClick={() => onAdd()}
                    />
                }
                {location.pathname === '/' 
                    && <Button 
                        color={showEditTask ? 'red' : 'green'} 
                        text={showEditTask ? 'Close' : 'Edit'} 
                        onClick={() => onEdit()}
                    />
                }
            </div>
        </header>

    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in js
/* const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
} */

export default Header
