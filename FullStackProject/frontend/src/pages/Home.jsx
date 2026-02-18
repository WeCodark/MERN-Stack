import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from '../components/TaskItem';

const Home = () => {
    const { tasks, isLoading } = useContext(TaskContext);

    if (isLoading) return <div className="loading">Loading tasks...</div>;

    return (
        <div className="container">
            <header className="page-header">
                <h1>My Tasks</h1>
                <p>Manage your daily goals efficiently.</p>
            </header>

            {tasks.length === 0 ? (
                <p className="empty-state">No tasks found. Create one!</p>
            ) : (
                <div className="task-grid">
                    {tasks.map((task) => (
                        <TaskItem key={task._id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;