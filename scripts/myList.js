


if(todoList.length > 0){
 addButtonEventListener();
 renderTodoList();
}

// POST/UPDATE
function addTodo(){
  //GET GUI OBJECTS
  const inputNameElement = document.querySelector('.js-input-name');
  const inputDateElement = document.querySelector('.js-input-due-date');

  //GET USER INPUT DATA 
  const name = inputNameElement.value;
  const dueDate = inputDateElement.value;

  //UPDATE DATA MODEL WITH USER INPUT DATA 
  todoList.push({
    name,
    dueDate
  });

  //CLEAR INPUT FIELDS
  inputNameElement.value = '';
  inputDateElement.value = '';

  //UPDATE VIEW
  renderTodoList();

}
//GET
function addListRow() {
  //ACCUMULATOR PATTERN: STRING -> HTML
  let htmlAccumulator = '';

  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;

    //CONSTRUCT HTML TEMPLATE STRING     (the list row)
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class= "js-button-delete-todo css-button-delete-todo">Delete</button> 
    `;

    //APPEND NEW HTML TEMPLATE
    htmlAccumulator += html;
  });

  //BIND DATA TO div-list-todo object
  document.querySelector('.js-div-list-todo')
    .innerHTML = htmlAccumulator;
}
//DELETE
function deleteTodo(deleteButton, i) {
  deleteButton.addEventListener('click', () => {
    //REMOVE  1 ITEM @ i
    todoList.splice(i, 1);
    //RENDER RESULT
    renderTodoList();
  });
}

function addButtonEventListener() {
  const addButton = document.querySelector('.js-button-add-todo')
  .addEventListener('click', () => addTodo());
}
function renderTodoList(){
  addListRow();
  deleteButtonEventListener();
}
function deleteButtonEventListener() {
  document.querySelectorAll('.js-button-delete-todo')
    .forEach((deleteButton, i) => {
      //BUTTON EVENT
      deleteTodo(deleteButton, i);
    });
}
