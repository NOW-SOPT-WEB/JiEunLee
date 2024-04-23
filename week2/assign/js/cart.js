// localStorage 에서 장바구니 데이터 가져와서 표에 뿌려주기
// storedData = json 으로 바꾼 로컬스토리지 데이터
// 로컬스토리지에서 데이터 가져와서 td 동적으로 만들어서 안에 내용 채우기 ㅇ

const logoBtn = document.querySelector(".header_logo-btn");

logoBtn.addEventListener("click", () => {
  window.location.href = "/week1/home.html";
});
const storedDataString = localStorage.getItem("cartList");
let storedData = JSON.parse(storedDataString);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cart_container");

  const selectAllBtn = document.querySelector(".selectAll");
  selectAllBtn.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    purchaseList = isChecked ? [...storedData] : [];
    itemCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
    console.log(purchaseList);
  });

  selectAllBtn.addEventListener("change", (e) => {
    if (e.target.checked) {
      purchaseList = [...storedData];
    } else {
      purchaseList = [];
    }
  });
  let purchaseList = [];
  let itemCheckboxes = [];
  // const product_info = document.querySelector(".product_info");
  // const product_price = document.querySelector(".product_price");
  // const product_category = document.querySelector(".product_category");
  // const product_delete = document.querySelector(".product_delete");

  storedData.forEach((eachStoredData) => {
    // for (let i = 0; i < storedData.length; i++) {
    // const eachStoredData = storedData[i];
    // console.log(eachStoredData);

    const article = document.createElement("article");
    article.className = "carListItem";

    const check_div = document.createElement("div");
    const check_divBtn = document.createElement("input");
    check_divBtn.type = "checkbox";
    check_div.appendChild(check_divBtn);
    article.appendChild(check_div);

    check_divBtn.addEventListener("change", (event) => {
      if (event.target.checked) {
        purchaseList.push(eachStoredData);
        console.log("check");
      } else {
        purchaseList = purchaseList.filter(
          (purchaseItem) => purchaseItem.id !== eachStoredData.id,
        );
      }
      console.log(purchaseList);
    });
    itemCheckboxes.push(check_divBtn);
    const productInfoWrapper = document.createElement("div");
    productInfoWrapper.className = "productInfoWrapper";

    const title_div = document.createElement("div");
    const title_par = document.createElement("p");
    title_par.textContent = eachStoredData.title;
    title_div.appendChild(title_par);
    article.appendChild(title_div);

    const price_div = document.createElement("div");
    price_div.innerHTML =
      parseInt(eachStoredData.price, 10).toLocaleString() + "원";
    article.appendChild(price_div);
    console.log(price_div);

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
  });
  const goHome = () => {
    window.location.href = "/week1/home.html";
  };
  // 홈으로 돌아가기 버튼
  const goHomeBtn = document
    .querySelector(".goHome-btn")
    .addEventListener("click", goHome);

  // 구매하기 버튼
  const buyBtn = document.querySelector(".buy-btn");

  buyBtn.addEventListener("click", () => {
    const modalContent = document.querySelector(".modal_content");
    while (modalContent.firstChild) {
      modalContent.removeChild(modalContent.firstChild);
    }

    let totalPrice = 0;

    purchaseList.forEach((item) => {
      const buyItem = document.createElement("div");
      buyItem.className = "purchaseItemDiv";

      const buyImg = document.createElement("img");
      buyImg.src = item.imgSrc;
      buyImg.alt = item.title;
      buyItem.appendChild(buyImg);
      buyImg.style.width = "100px";

      const buyTitle = document.createElement("h6");
      buyTitle.className = "buyTitle";
      buyTitle.textContent = item.title;

      const buyPrice = document.createElement("div");
      buyPrice.className = "buyPrice";
      buyPrice.textContent = parseInt(item.price).toLocaleString() + "원";

      buyItem.appendChild(buyTitle);
      buyItem.appendChild(buyPrice);

      modalContent.appendChild(buyItem);
      totalPrice += parseInt(item.price);
    });
    const totalPriceContent = document.querySelector(".total_price");

    totalPriceContent.textContent =
      "총금액" + totalPrice.toLocaleString() + "원";
    modal.style.display = "block";
  });
  const modal = document.querySelector(".buy_modal");
  const modalBuyBtn = document.querySelector(".modal_buy-btn");
  const modalCloseBtn = document.querySelector(".modal_close-btn");

  modalCloseBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  modalBuyBtn.addEventListener("click", () => {
    storedData = storedData.filter(
      (item) =>
        !purchaseList.some((purchaseItem) => purchaseItem.id === item.id),
    );
    console.log(storedData);
    localStorage.setItem("cartList", JSON.stringify(storedData));
    purchaseList = [];
    alert("주문완료");
    modal.style.display = "none";
    window.location.reload(true);
  });
});
