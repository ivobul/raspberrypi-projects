const userText = document.getElementById("user_text");
const memeText = document.getElementById("meme_text");
const img = document.querySelector("img");
const userImg = document.querySelector("input[type=file]");

// Update text
userText.addEventListener("input", () => {
  memeText.innerText = userText.value;
});

// Update image
userImg.addEventListener("change", () => {
  const uploadedImg = document.querySelector('input[type="file"]').files[0];
  img.src =  window.URL.createObjectURL(uploadedImg);
});

