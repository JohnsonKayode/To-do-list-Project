// alert(`this is an alert `);

let buttonToAddList = document.querySelector("#addButton");
let userInput = document.getElementById("input");
let orderedList = document.querySelector("ol");

buttonToAddList.addEventListener("click", () => {
  let list = document.createElement("li");
  let image = document.createElement("img");
  let divList = document.createElement("div");
  divList.className = "list-item";
  image.src = "./image/delete.png";

  if (userInput.value === "") {
    alert("Please enter a task");
  } else {
    list.innerHTML = userInput.value;
    orderedList.appendChild(divList);
    divList.appendChild(list);
    divList.appendChild(image);

    console.log(divList);

    image.addEventListener("click", () => {
      orderedList.removeChild((divList));
      // divList.removeChild(image);
    });

    userInput.value = "";
  }
});
