import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // We navigate inside context to redirect after actions
    // Note: In real apps, you might handle navigation in components, 
    // but for simplicity, we keep logic here.

    // 1. READ (Get all tasks)
    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setIsLoading(false);
        }
    };

    // 2. CREATE
    const addTask = async (newTask) => {
        try {
            const response = await api.post('/tasks', newTask);
            setTasks([response.data, ...tasks]); // Add new task to top of list
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    // 3. DELETE
    const deleteTask = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // 4. UPDATE (Toggle Status)
    const toggleTaskStatus = async (task) => {
        const updatedStatus = task.status === 'completed' ? 'pending' : 'completed';
        try {
            const response = await api.put(`/tasks/${task._id}`, { ...task, status: updatedStatus });
            setTasks(tasks.map((t) => (t._id === task._id ? response.data : t)));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, isLoading, addTask, deleteTask, toggleTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;