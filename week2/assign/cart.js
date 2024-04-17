// localStorage 에서 장바구니 데이터 가져와서 표에 뿌려주기
// storedData = json 으로 바꾼 로컬스토리지 데이터
// 로컬스토리지에서 데이터 가져와서 td 동적으로 만들어서 안에 내용 채우기 ㅇ

const logoBtn = document.querySelector(".header_logo-btn");

logoBtn.addEventListener("click", () => {
  window.location.href = "/week1/home.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cart_container");

  const storedDataString = localStorage.getItem("cartList");
  let storedData = JSON.parse(storedDataString);

  const product_checkbox = document.querySelector(".product_checkbox");
  const product_info = document.querySelector(".product_info");
  const product_price = document.querySelector(".product_price");
  const product_category = document.querySelector(".product_category");
  const product_delete = document.querySelector(".product_delete");

  console.log(storedData);

  for (let i = 0; i < storedData.length; i++) {
    const eachStoredData = storedData[i];
    // console.log(eachStoredData);

    const article = document.createElement("article");
    article.className = "carListItem";

    const check_div = document.createElement("div");
    const check_divBtn = document.createElement("input");
    check_divBtn.type = "checkbox";
    check_div.appendChild(check_divBtn);
    article.appendChild(check_div);

    const title_div = document.createElement("div");
    const title_par = document.createElement("p");
    title_par.textContent = eachStoredData.title;
    title_div.appendChild(title_par);
    article.appendChild(title_div);

    const price_div = document.createElement("div");
    price_div.innerHTML = eachStoredData.price;
    article.appendChild(price_div);

    const img_div = document.createElement("div");
    img_div.className = "img_div";
    const img = document.createElement("img");
    img.src = eachStoredData.imgSrc;
    img.alt = eachStoredData.title;
    img_div.appendChild(img);
    article.appendChild(img_div);

    const category_div = document.createElement("div");
    category_div.textContent = eachStoredData.category;
    article.appendChild(category_div);

    const delete_div = document.createElement("div");
    const delete_divBtn = document.createElement("button");
    delete_divBtn.addEventListener("click", () => {
      const deleted_item = storedData.filter((i) => i.id !== eachStoredData.id);
      console.log(deleted_item);
      localStorage.removeItem("cartList");
      localStorage.setItem("cartList", JSON.stringify(deleted_item));
      storedData = deleted_item && [];
      console.log(storedData);
      window.location.reload(true);
    });
    delete_divBtn.textContent = "삭제";

    delete_div.appendChild(delete_divBtn);
    article.appendChild(delete_div);

    container.appendChild(article);
  }
});
