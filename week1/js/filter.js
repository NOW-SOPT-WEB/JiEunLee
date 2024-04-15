import { WishList } from "./itemList.js";

const nav_li = document.querySelectorAll(".category_nav li");
const category_article = document.querySelector(".category_article");
const section_title = document.querySelector(".section_title");

WishList.forEach((item) => {
  const { imgSrc, category, price, title } = item;

  const container = document.createElement("div");
  container.classList.add("item_container");
  container.classList.add(`${category}`);

  const itemImg = document.createElement("img");
  itemImg.src = imgSrc;
  itemImg.alt = title;

  const likeBtn = document.createElement("button");
  likeBtn.innerText = "❤️";

  const itemTitle = document.createElement("h5");
  itemTitle.innerText = title;

  const itemPrice = document.createElement("p");
  itemPrice.innerText = price + "WON";

  container.append(itemImg, likeBtn, itemTitle, itemPrice);
  category_article.appendChild(container);

  // 배너
  const slide = document.querySelector(".slide");

  const item_img = document.createElement("img");
  item_img.src = imgSrc;
  item_img.alt = title;
  item_img.classList.add("item_img");

  slide.appendChild(item_img);
});

// 카테고리 클릭시
function NavClick(category_name) {
  category_article.innerText = "";
  section_title.innerHTML = category_name;

  const filter_category = WishList.filter((item) =>
    category_name === "전체" ? true : item.category === category_name,
  );
  filter_category.forEach((item) => {
    const { title, price, imgSrc, category } = item;

    const container = document.createElement("div");
    container.classList.add("item_container");
    container.classList.add(`${category}`);

    const itemImg = document.createElement("img");
    itemImg.src = imgSrc;
    itemImg.alt = title;

    const likeBtn = document.createElement("button");
    likeBtn.innerText = "🩷";

    const itemTitle = document.createElement("h5");
    itemTitle.innerText = title;

    const itemPrice = document.createElement("p");
    itemPrice.innerText = price + "WON";

    container.append(itemImg, likeBtn, itemTitle, itemPrice);
    category_article.appendChild(container);
  });
}
nav_li.forEach((item) => {
  const nav_name = item.innerText;
  item.addEventListener("click", () => NavClick(nav_name));
});
