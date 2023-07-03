/**************************************/
/************   ELEMENTS   ************/
/**************************************/

const thumbials = document.querySelectorAll(".thumbials img");
const actualImg = document.querySelectorAll(".actualImg");
const fullScr = document.querySelector(".fullScr");
const leftArrow = document.querySelectorAll(".leftArrow");
const rightArrow = document.querySelectorAll(".rightArrow");
const closing = document.querySelector(".close");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const actualAmount = document.querySelector(".actualAmount");
const cartAmount = document.querySelector(".cartAmount");
const cartItems = document.querySelector(".cartItems");
const cartEmpty = document.querySelector(".cartContent > p");
const cartContent = document.querySelector(".cartContent");
const cartIcon = document.querySelector(".cart");
const trashCan = document.querySelector(".trashCan");
const finalPrice = document.querySelector(".finalPrice");
const addToCart = document.querySelector(".addToCart");
const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
const navBkg = document.querySelector(".navBkg");

/***************************************/
/********       VARIABLES       ********/
/***************************************/

let actualImgNr = 1;
let actualAmountNr = 0;

/***************************************/
/********    EVENT LISTENERS    ********/
/***************************************/
/*****************/
/*** THUMBIALS ***/
/*****************/
thumbials.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // actualImgNr = thumb.alt.at(-1);
    thumbials.forEach((thumb) => {
      thumb.style.border = "none";
    });

    if (thumb.alt == "product 1") {
      if (fullScr.style.display == "grid") {
        actualImg[1].src = "images/image-product-1.jpg";
      } else {
        actualImg[0].src = "images/image-product-1.jpg";
      }
    }
    if (thumb.alt == "product 2") {
      if (fullScr.style.display == "grid") {
        actualImg[1].src = "images/image-product-2.jpg";
      } else {
        actualImg[0].src = "images/image-product-2.jpg";
      }
    }
    if (thumb.alt == "product 3") {
      if (fullScr.style.display == "grid") {
        actualImg[1].src = "images/image-product-3.jpg";
      } else {
        actualImg[0].src = "images/image-product-3.jpg";
      }
    }
    if (thumb.alt == "product 4") {
      if (fullScr.style.display == "grid") {
        actualImg[1].src = "images/image-product-4.jpg";
      } else {
        actualImg[0].src = "images/image-product-4.jpg";
      }
    }
    thumb.style.border = "2px solid var(--Orange)";
  });
});

/******************/
/*** ACTUAL IMG ***/
/******************/
actualImg.forEach((image) => {
  image.addEventListener("click", () => {
    if (self.innerWidth > 800) fullScr.style.display = "grid";
  });
});

/*****************/
/*** CLOSE BTN ***/
/*****************/
closing.addEventListener("click", () => {
  fullScr.style.display = "none";
});

/******************/
/*** LEFT ARROW ***/
/******************/
leftArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    console.log(actualImgNr);
    if (actualImgNr > 1) {
      actualImgNr--;
      if (self.innerWidth > 800) {
        actualImg[1].src = `images/image-product-${actualImgNr}.jpg`;
      } else {
        actualImg[0].src = `images/image-product-${actualImgNr}.jpg`;
      }
    }
  });
});

/*******************/
/*** RIGHT ARROW ***/
/*******************/
rightArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    // console.log(actualImgNr);
    if (actualImgNr < 4) {
      actualImgNr++;
      if (self.innerWidth > 800) {
        actualImg[1].src = `images/image-product-${actualImgNr}.jpg`;
      } else {
        actualImg[0].src = `images/image-product-${actualImgNr}.jpg`;
      }
    }
  });
});
/************/
/*** PLUS ***/
/************/
plus.addEventListener("click", () => {
  actualAmountNr++;
  actualAmount.innerHTML = actualAmountNr;
});
/*************/
/*** MINUS ***/
/*************/
minus.addEventListener("click", () => {
  if (actualAmountNr > 0) {
    actualAmountNr--;
    actualAmount.innerHTML = actualAmountNr;
  }
});

/*******************/
/*** ADD TO CART ***/
/*******************/
addToCart.addEventListener("click", () => {
  if (actualAmountNr == 0) {
    cartItems.style.display = "none";
    cartEmpty.style.display = "block";
    cartAmount.style.display = "none";
  } else {
    cartItems.style.display = "block";
    cartEmpty.style.display = "none";
    cartAmount.style.display = "block";
    finalPrice.innerHTML = `$${125 * actualAmountNr}.00`;
    cartAmount.innerHTML = actualAmountNr;
  }
});

/*****************/
/*** CART ICON ***/
/*****************/
let cartPopupState = false;
cartIcon.addEventListener("click", () => {
  if (cartPopupState == false) {
    cartContent.style.display = "grid";
    cartPopupState = true;
  } else {
    cartContent.style.display = "none";
    cartPopupState = false;
  }
});

/*****************/
/*** TRASH CAN ***/
/*****************/
trashCan.addEventListener("click", () => {
  actualAmountNr = 0;
  actualAmount.innerHTML = actualAmountNr;
  cartAmount.innerHTML = actualAmountNr;
  cartItems.style.display = "none";
  cartEmpty.style.display = "block";
  cartAmount.style.display = "none";
});

/*******************/
/*** MENU BUTTON ***/
/*******************/
let menuState = false; // false: nav-off, true: nav-on
menuBtn.addEventListener("click", () => {
  console.log(menuBtn);
  if (menuState == false) {
    document.querySelector(".menu img").src = "images/icon-close.svg";
    // navBkg.style.display = "block";
    navBkg.classList.add("display");
    menuState = !menuState;
    nav.classList.add("display");
  } else {
    document.querySelector(".menu img").src = "images/icon-menu.svg";
    // navBkg.style.display = "none";
    navBkg.classList.remove("display");
    menuState = !menuState;
    nav.classList.remove("display");
  }
});
