export default function TaskItem({ task, toggleTask }) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span className={task.done ? "line-through" : ""}>
        {task.author}: {task.text}
      </span>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
      />
    </div>
  );
}
