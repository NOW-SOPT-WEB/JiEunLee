import { WishList } from "./js/itemList.js";

// 카테고리 상품리스트
document.addEventListener("DOMContentLoaded", function () {
  const category_articles = document.querySelectorAll(".category_article");

  WishList.forEach((list, index) => {
    const category_article = category_articles[index + 1];
    list.forEach((item) => {
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("categoryContainer");

      const imgElement = document.createElement("img");
      imgElement.src = item.imgSrc;
      imgElement.alt = item.title;

      const titleElement = document.createElement("h4");
      titleElement.textContent = item.title;

      const likebtnElement = document.createElement("button");
      likebtnElement.textContent = "❤️";

      const priceElement = document.createElement("price");
      priceElement.textContent = item.price + "won";

      categoryContainer.appendChild(imgElement);
      categoryContainer.appendChild(titleElement);
      categoryContainer.appendChild(likebtnElement);
      categoryContainer.appendChild(priceElement);
      category_article.appendChild(categoryContainer);
    });
  });
});

// 로고 클릭하면 홈화면 이동
const logoBtn = document.querySelector(".header_logo-btn");

logoBtn.addEventListener("click", () => {
  window.location.href = "/week1/home.html";
});
