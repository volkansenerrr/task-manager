import { useState } from "react";

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleUpdate = () => {
    onUpdate(task.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleUpdate}>Kaydet</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Düzenle</button>
          <button onClick={() => onDelete(task.id)}>Sil</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
