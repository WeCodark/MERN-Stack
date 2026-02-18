import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEditTask from './pages/AddEditTask';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <Router>
      <TaskProvider>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEditTask />} />
          </Routes>
        </main>
      </TaskProvider>
    </Router>
  );
}

export default App;