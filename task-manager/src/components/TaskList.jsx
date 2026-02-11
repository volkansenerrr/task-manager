import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center bg-gray-50 border rounded-lg px-3 py-2"
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mr-2"
          />

          {/* Task Text */}
          <span
            className={`flex-1 ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className="text-blue-600 text-sm hover:underline"
            >
              Düzenle
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-600 text-sm hover:underline"
            >
              Sil
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
