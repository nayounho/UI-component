// Write Javascript code here!
import "./style.css";
// const items = document.querySelectorAll(".item");
// console.log(items);
// items.forEach(item => {
//   item.addEventListener("click", e => {
//     item.classList.toggle("open");
//     items.forEach = elem => {
//       if (elem !== item) elem.classList.remove("open");
//     };
//   });
// });

const $wrapper = document.querySelector(".wrapper");
const $items = document.querySelectorAll(".item");

// $wrapper.addEventListener("click", e => {
//   const targetElem = e.target;
//   e.stopPropagation();
//   if (!targetElem.classList.contains("item")) return;
//   targetElem.classList.toggle("open");
//   $items.forEach(elem => {
//     if (elem !== targetElem) elem.classList.remove("open");
//   });
// });

document.body.addEventListener("click", e => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains("context")) return;
  if (targetClassList.contains("item")) {
    targetClassList.toggle("open");
    $items.forEach(elem => {
      if (elem !== e.target) elem.classList.remove("open");
    });
    return;
  }
  $items.forEach(elem => {
    elem.classList.remove("open");
  });
});
