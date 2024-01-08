let arr = [];

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let inputDate = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let todoDate = inputDate.value;

  arr.push({
    items: todoItem,
    dueDate: todoDate,
  });
  inputElement.value = "";
  inputDate.value = "";
  displayItems(arr);
}

function displayItems(arr) {
  let displayElement = document.querySelector(".todoContainer");
  let newHtml = "";

  for (let i = 0; i < arr.length; i++) {
    let { items, dueDate } = arr[i];
    newHtml += `
        <span>${items}</span >
        <span>${dueDate}</span >
        <button class="btn-delete" onclick ="
         arr.splice(${i},1);
         displayItems(arr);
         "
        >Delete</button>`;
  }

  displayElement.innerHTML = newHtml;
}
