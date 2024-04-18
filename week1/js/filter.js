import { WishList } from "./itemList.js";

// 선언
const nav_li = document.querySelectorAll(".category_nav li");
const category_article = document.querySelector(".category_article");
const section_title = document.querySelector(".section_title");

WishList.forEach((item) => {
  const { imgSrc, title, price, category } = item;

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
  itemPrice.innerText = price + "원";

  container.append(itemImg, itemTitle, itemPrice, likeBtn);
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
    const { imgSrc, title, price, category } = item;

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
    itemPrice.innerText = price + "원";

    container.append(itemImg, itemTitle, itemPrice, likeBtn);
    category_article.appendChild(container);
    console.log(category_article);
  });
}

nav_li.forEach((item) => {
  const nav_name = item.innerText;
  item.addEventListener("click", () => NavClick(nav_name));
});

// 장바구니에 추가
const item = document.querySelectorAll(".item_container");

function handleAddCart(e, category, imgSrc, title) {
  const answer = confirm("선물바구니에 담을까요?");

  if (answer == false) {
    return;
  } else {
    location.href = "/week2/assign/cart.html";
  }
  const [img, likeBtn, price] = e.currentTarget.children;
  const cartList = JSON.parse(localStorage.getItem("cartList")) ?? [];

  cartList.push({
    id: Date.now(),
    title,
    price: price.innerText,
    category,
    imgSrc,
  });

  localStorage.setItem("cartList", JSON.stringify(cartList));
}
item.forEach((each) => {
  const category = each.classList[1];
  const img = each.children[0].getAttribute("src");
  const title = each.children[0].getAttribute("alt");
  each.addEventListener("click", (e) => handleAddCart(e, category, img, title));
});
