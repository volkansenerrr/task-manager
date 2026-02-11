import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);

  // LocalStorage kaydetme
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
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

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-2">Task Manager</h1>

        {/* Sayaç */}
        <p className="text-sm text-gray-500 text-center mb-4">
          Completed {tasks.filter((t) => t.completed).length} / {tasks.length}
        </p>

        <TaskForm
          onAdd={addTask}
          onUpdate={updateTask}
          editingTask={editingTask}
        />

        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onEdit={startEdit}
          onToggle={toggleComplete}
        />
      </div>
    </div>
  );
}

export default Home;
