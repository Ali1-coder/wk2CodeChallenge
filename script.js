//Storing in variables
const btnAdd = document.querySelector(".add");
const btnRemove = document.querySelector(".remove");

//Event when Add btn clicked
btnAdd.addEventListener("click", addItems);
//Event when clear btn clicked
btnRemove.addEventListener("click", removeItems);

//function to add

function addItems() {
  const input = document.querySelector("input");
  const items = input.value.trim();
  if (items === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
      <span>${items}</span>
      <button class='purchase'>Purchase</button>
      
  `;
  document.querySelector(".items").appendChild(li);
  document.querySelector(".purchase").addEventListener("click", function () {
    li.classList.add("purchased");
  });

  input.value = "";
}
//function to clear items
function removeItems() {
  document.querySelector(".items").innerHTML = "";
}
