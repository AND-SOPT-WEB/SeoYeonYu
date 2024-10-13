const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");

let todoArray = [];

let todoInit = localStorage.getItem("todo");
todoArray = todoInit ? JSON.parse(todoInit) : [];

const getId = () => Date.now();

const init = () => {
  todoArray.forEach((item) => {
    addTodo(item.text, item.id);
  });
};

const addTodo = (value, id) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");

  todoList.appendChild(li);
  li.textContent = value;

  if (!todoArray.some((item) => item.id === id)) {
    todoArray.push({ text: value, id: id });
    localStorage.setItem("todo", JSON.stringify(todoArray));
  }

  li.appendChild(delBtn);
  delBtn.textContent = "삭제";
  delBtn.addEventListener("click", () => {
    todoList.removeChild(li);
    todoArray = todoArray.filter((item) => item.id !== id);
    localStorage.setItem("todo", JSON.stringify(todoArray));
  });

  document.querySelector(".todo-input").value = "";
};

const buttonClick = () => {
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) addTodo(todoContent, getId());
};

addBtn.addEventListener("click", buttonClick);

init();
