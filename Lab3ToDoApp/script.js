// tasks array stores objects: { id: number, text: string, completed: boolean }
const tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const completeBtn = document.getElementById("completeBtn");
const activeBtn = document.getElementById("activeBtn");
const allBtn = document.getElementById("allBtn");
const tasksContainer = document.getElementById("tasksContainer");

let nextId = 1;

// render(filter) - filter can be 'all' | 'completed' | 'active'
function render(filter = "all") {
  // choose which tasks to show
  let list = tasks;
  if (filter === "completed") list = tasks.filter((t) => t.completed);
  if (filter === "active") list = tasks.filter((t) => !t.completed);

  // clear container
  tasksContainer.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "task";
    empty.textContent = "No tasks to show";
    tasksContainer.appendChild(empty);
    return;
  }

  // render each task
  list.forEach((task) => {
    const el = document.createElement("div");
    el.className = "task" + (task.completed ? " completed" : "");

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = task.text;

    // toggle completion when clicking the text
    text.addEventListener("click", () => {
      task.completed = !task.completed;
      render(filter);
    });

    const actions = document.createElement("div");

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      const idx = tasks.findIndex((t) => t.id === task.id);
      if (idx >= 0) tasks.splice(idx, 1);
      render(filter);
    });

    // only show a per-task "Complete" button for tasks that are not completed
    if (!task.completed) {
      const complete = document.createElement("button");
      complete.textContent = "Complete";
      complete.addEventListener("click", (e) => {
        e.stopPropagation();
        task.completed = true; // explicitly mark as completed
        render(filter);
      });
      actions.appendChild(complete);
    }

    actions.appendChild(del);

    el.appendChild(text);
    el.appendChild(actions);
    tasksContainer.appendChild(el);
  });
}

// add button handler
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ id: nextId++, text, completed: false });
  taskInput.value = "";
  render("all");
});

// complete button: show completed tasks
completeBtn.addEventListener("click", () => render("completed"));

// active button: show uncompleted tasks
activeBtn.addEventListener("click", () => render("active"));

// all button: show all tasks
if (allBtn) allBtn.addEventListener("click", () => render("all"));

// initial render
render("all");
