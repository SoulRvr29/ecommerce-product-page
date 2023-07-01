const thumbials = document.querySelectorAll(".thumbials img");
let actualImg = document.querySelectorAll(".actualImg");
let actualImgNr = 1;
console.log(self.innerWidth);

const fullScr = document.querySelector(".fullScr");
const leftArrow = document.querySelectorAll(".leftArrow");
const rightArrow = document.querySelectorAll(".rightArrow");
const closing = document.querySelector(".close");

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
      actualImg.forEach((image) => {
        image.src = "images/image-product-1.jpg";
      });
    }
    if (thumb.alt == "product 2") {
      actualImg.forEach((image) => {
        image.src = "images/image-product-2.jpg";
      });
    }
    if (thumb.alt == "product 3") {
      actualImg.forEach((image) => {
        image.src = "images/image-product-3.jpg";
      });
    }
    if (thumb.alt == "product 4") {
      actualImg.forEach((image) => {
        image.src = "images/image-product-4.jpg";
      });
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
      actualImg.forEach((image) => {
        image.src = `images/image-product-${actualImgNr}.jpg`;
      });
    }
  });
});

/*******************/
/*** RIGHT ARROW ***/
/*******************/
rightArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    console.log(actualImgNr);
    if (actualImgNr < 4) {
      actualImgNr++;
      actualImg.forEach((image) => {
        image.src = `images/image-product-${actualImgNr}.jpg`;
      });
    }
  });
});
