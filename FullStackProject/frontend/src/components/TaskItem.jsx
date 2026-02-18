import { useContext } from 'react';
import { FaTrash, FaCheck, FaUndo } from 'react-icons/fa';
import TaskContext from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { deleteTask, toggleTaskStatus } = useContext(TaskContext);

    return (
        <div className={`task-card ${task.status}`}>
            <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`status-badge ${task.status}`}>{task.status}</span>
            </div>
            <p>{task.description}</p>
            <div className="task-footer">
                <button onClick={() => toggleTaskStatus(task)} className="btn-icon">
                    {task.status === 'completed' ? <FaUndo /> : <FaCheck />}
                </button>
                <button onClick={() => deleteTask(task._id)} className="btn-icon delete">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;