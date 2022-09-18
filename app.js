const addform = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const GenerateTemplate = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

const FilterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// add todos
addform.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addform.add.value.trim();

  if (todo.length) {
    GenerateTemplate(todo);
    addform.reset();
  }
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter todos
search.addEventListener("keyup", () => {

  const term = search.value.trim().toLowerCase();
  FilterTodos(term);
});
