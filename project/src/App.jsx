import { useState } from "react";

// b. Reusable component: Task Item
function TaskItem({ task, onToggle }) {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`p-4 mb-2 rounded-lg cursor-pointer flex justify-between
        ${task.completed ? "bg-green-100 text-green-600 line-through" : "bg-white shadow border"}`}
    >
      <span>{task.title}</span>
      <span>{task.completed ? "✓ Done" : "○"}</span>
    </div>
  );
}

// b. Reusable component: Task List
function TaskList({ tasks, onToggle }) {
  return (
    <div>
      {/* d. Display Tasks - render dynamically */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}

function App() {
  // a. Initial Data - 4 tasks with ID, title, completion status [2]
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete HTML Assignment", completed: false },
    { id: 2, title: "Study JavaScript Loops", completed: true },
    { id: 3, title: "Push project to GitHub", completed: false },
    { id: 4, title: "Build React Student Card", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // e. Add Task [3]
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  // f. Complete Task [2]
  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Student Task Manager
        </h1>

        {/* e. Add Task Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="flex-1 p-3 border rounded-lg"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-6 rounded-lg font-bold"
          >
            Add
          </button>
        </div>

        {/* c. Props - passing tasks and onToggle to child */}
        <TaskList tasks={tasks} onToggle={handleToggle} />

        <p className="text-center mt-4 text-gray-500">
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.completed).length}
        </p>
      </div>
    </div>
  );
}

export default App;
