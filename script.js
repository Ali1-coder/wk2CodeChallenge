const btnAdd = document.querySelector(".add");
const btnRemove = document.querySelector(".remove");
btnAdd.addEventListener("click", addItems);
btnRemove.addEventListener("click", removeItems);
function addItems() {
  const input = document.querySelector("input");
  const items = input.value.trim();
  if (items === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
      <span>${items}</span>
      
      
  `;
  document.querySelector(".items").appendChild(li);
  input.value = "";
}
function removeItems() {
  document.querySelector(".items").innerHTML = "";
}
