const deleteButton = document.querySelector(".delete-btn");
const listItem = document.querySelector(".list-item");

deleteList = () => {
  listItem.remove();
};

deleteButton.addEventListener("click", deleteList);
