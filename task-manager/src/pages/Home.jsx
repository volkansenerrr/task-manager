import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (text) => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, text } : task,
      ),
    );
    setEditingTask(null);
  };

  const startEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>

        <TaskForm
          onAdd={addTask}
          onUpdate={updateTask}
          editingTask={editingTask}
        />

        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={startEdit} />
      </div>
    </div>
  );
}

export default Home;
