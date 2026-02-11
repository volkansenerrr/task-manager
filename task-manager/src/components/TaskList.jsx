import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-50 border rounded-lg px-3 py-2"
        >
          <span>{task.text}</span>
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
