const Mango = document.createElement("li");
Mango.textContent = "망고";
const fruitList = document.querySelector(".fruit__list");

fruitList.appendChild(Mango);

// 세번째를 blue 로
const bananaNode = fruitList.children[2];
bananaNode.classList.add("blue");

// class 가 red인 애들만 삭제
document.querySelectorAll(".red").forEach((item) => {
  item.remove();
});
// btn 누르면 과일 개수 알려주기
const fruitBtn = document.querySelector(".count");

fruitBtn.addEventListener("click", () => {
  alert(`${fruitList.children.length}개`);
});
