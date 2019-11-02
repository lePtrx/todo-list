// const deleteButton = document.querySelector(".delete-btn");
// const listItem = document.querySelector(".list-item");

// deleteList = () => {
//   listItem.remove();
// };

// deleteButton.addEventListener("click", deleteList);

// To add new todos into list

var addTodos = document.querySelector(".add-list-form");
var ul = document.querySelector(".list-all");

addTodos.addEventListener("keypress", function(keyPressed) {
  if (keyPressed.which === 13) {
    var li = document.createElement("li");
    li.setAttribute("class", "list-item");
    var p = document.createElement("p");
    p.setAttribute("class", "item");
    var listItem = document.createElement("span");
    var deleteIcon = document.createElement("i");

    var newTodo = this.value;
    this.value = " ";

    deleteIcon.classList.add("far", "fa-trash-alt", "delete-btn");
    listItem.append(deleteIcon);
    ul.appendChild(li)
      .appendChild(p)
      .append(newTodo, listItem);

    deleteTodo();
  }
});
