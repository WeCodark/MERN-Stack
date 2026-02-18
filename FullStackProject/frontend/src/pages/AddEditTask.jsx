import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskContext from '../context/TaskContext';

const AddEditTask = () => {
    const { addTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask(formData);
        navigate('/'); // Redirect to Home after adding
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Create New Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter task title"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Task details..."
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary block">Save Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddEditTask;