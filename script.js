document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  const imageSources = [
    "https://i.pinimg.com/736x/48/a8/32/48a83233e19e24633ff2fe43ee33a1e4.jpg",
    "https://i.pinimg.com/736x/d1/25/01/d125011f01171b65a63201f509e3e63c.jpg",
    "https://i.pinimg.com/736x/53/a4/24/53a424444945be4583b88a28a5269ca9.jpg",
    "https://i.pinimg.com/1200x/32/9f/3a/329f3a506a9d4f4f4840382048f8587b.jpg",
    "https://i.pinimg.com/736x/45/5b/fb/455bfb810bffeabbc37b3ba0c0e9afd1.jpg",
    "https://i.pinimg.com/736x/33/38/51/333851fa66d52864196fd0dcf7a849c0.jpg",
    "https://i.pinimg.com/736x/9d/e9/f0/9de9f03c2ca96f6e7139b48264aa3188.jpg",
    "https://i.pinimg.com/736x/6d/31/89/6d3189d24742473a6b3187fc48dffdd6.jpg",
    "https://i.pinimg.com/736x/99/47/15/9947158c7793066ce5ac23cb60f30c5a.jpg",
    "https://i.pinimg.com/736x/98/c4/fb/98c4fb8635c3a5e46f453dc5fdd2d120.jpg",
    "https://i.pinimg.com/736x/bb/0a/6e/bb0a6e32b217d84e35a2e8db5131df1f.jpg"
  ];

  let currentIndex = 0;

  function showImage(index) {
    mainImage.style.opacity = 0;
    setTimeout(() => {
      mainImage.src = imageSources[index];
      mainImage.style.opacity = 1;
    }, 300);
  }

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    showImage(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    showImage(currentIndex);
  }, 4000); // 4 seconds interval
});
