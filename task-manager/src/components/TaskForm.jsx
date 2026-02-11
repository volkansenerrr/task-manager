import { useState, useEffect } from "react";

function TaskForm({ onAdd, onUpdate, editingTask }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTask) {
      onUpdate(text);
    } else {
      onAdd(text);
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Görev gir..."
        className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        className={`px-4 py-2 rounded-lg text-white transition ${
          editingTask
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {editingTask ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
}

export default TaskForm;
