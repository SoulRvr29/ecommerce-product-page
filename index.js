const thumbials = document.querySelectorAll(".thumbials img");
let actualImg = document.querySelector(".actualImg");
const fullScr = document.querySelector(".fullScr");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

thumbials.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    if (thumb.alt == "product 1") actualImg.src = "images/image-product-1.jpg";
    if (thumb.alt == "product 2") actualImg.src = "images/image-product-2.jpg";
    if (thumb.alt == "product 3") actualImg.src = "images/image-product-3.jpg";
    if (thumb.alt == "product 4") actualImg.src = "images/image-product-4.jpg";
    thumb.style.border = "2px solid var(--Orange)";
  });
});

actualImg.addEventListener("click", () => {
  fullScr.style.display = "grid";
});
