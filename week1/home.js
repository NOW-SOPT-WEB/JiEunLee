import { WishList } from "./js/itemList.js";

// 로고 클릭하면 홈화면 이동
const logoBtn = document.querySelector(".header_logo-btn");

logoBtn.addEventListener("click", () => {
  window.location.href = "/week1/home.html";
});

// 상수로 카테고리 아이템 불러오기
document.addEventListener("DOMContentLoaded", function () {
  const category_articles = document.querySelector(".category_article");

  WishList.forEach((item) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categoryContainer");

    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;
    imgElement.alt = item.title;
    imgElement.classList.add("img_element");
    imgElement.setAttribute("data-id", item.id); // 상품 id를 data-id 속성으로 추가

    const titleElement = document.createElement("h4");
    titleElement.textContent = item.title;

    const likebtnElement = document.createElement("button");
    likebtnElement.textContent = "❤️";

    const priceElement = document.createElement("p");
    priceElement.textContent = item.price + "won";

    categoryContainer.appendChild(imgElement);
    categoryContainer.appendChild(titleElement);
    categoryContainer.appendChild(likebtnElement);
    categoryContainer.appendChild(priceElement);
    category_articles.appendChild(categoryContainer);
  });
});

// 카테고리 filter기능
document.addEventListener("DOMContentLoaded", function () {
  const categoryNav = document.querySelector(".category_nav ol");
  const categorySection = document.querySelector(".category_section article");

  // nav 클릭시
  categoryNav.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const category = event.target.textContent.trim();
      if (category == "디저트") {
        filterItems("dessert");
      } else if (category == "상품권") {
        filterItems("paper");
      } else if (category == "생필품") {
        filterItems("routine");
      } else {
        filterItems("전체");
      }
    }
  });

  function filterItems(category) {
    categorySection.innerHTML = "";

    if (category === "전체") {
      WishList.forEach((item) => {
        renderCategoryItem(item);
      });
    } else {
      const filteredItems = WishList.filter(
        (item) => item.category === category,
      );
      filteredItems.forEach((item) => {
        renderCategoryItem(item);
      });
    }
  }

  function renderCategoryItem(item) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categoryContainer");

    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;
    imgElement.alt = item.title;
    imgElement.classList.add("img_element");
    imgElement.setAttribute("data-id", item.id);

    const titleElement = document.createElement("h4");
    titleElement.textContent = item.title;

    const likebtnElement = document.createElement("button");
    likebtnElement.textContent = "❤️";

    const priceElement = document.createElement("span");
    priceElement.textContent = item.price + "원";

    categoryContainer.appendChild(imgElement);
    categoryContainer.appendChild(titleElement);
    categoryContainer.appendChild(likebtnElement);
    categoryContainer.appendChild(priceElement);

    categorySection.appendChild(categoryContainer);
  }
});
