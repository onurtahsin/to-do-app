const input = document.getElementById("todo");
const add = document.getElementById("add");
const del = document.getElementById("delete");
const list = document.getElementById("list");
const list2 = document.getElementById("list2");

add.addEventListener("click", () => {
  if (!input.value) {
    alert("Don't you have anything to do today");
  } else {
    list2.innerHTML = "";
    list.innerHTML += `<li id="too2"><button class="acc btn btn-info text-white "><i class="bi bi-calendar-check"></i></button> <button class="wasted btn btn-danger"><i class="bi bi-calendar-x"></i></button>  ${input.value} </li>`;

    input.value = "";
    input.focus();
    document.querySelectorAll(".acc").forEach((e) => {
//       e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.classList.toggle("text-danger", " bi bi-trophy-fill");
      });
    });

    document.querySelectorAll(".wasted").forEach((e) => {
      e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.remove();
      });
    });
  }
});
del.addEventListener("click", () => {
  // list.innerHTML = `<img class="border border-5 " src="./img/patrick-star-to-do-list.gif" alt="nothing" />`;
  list.innerHTML = "";
  list2.innerHTML = `<li id="too"><img class="border border-5 " src="./img/patrick-star-to-do-list.gif" alt="nothing" /></li>`;
});
