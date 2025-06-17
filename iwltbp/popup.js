let words = [];

fetch(chrome.runtime.getURL("words.txt"))
  .then(res => res.text())
  .then(text => {
    words = text.split("\n").filter(Boolean);
  });

document.getElementById("clickme").addEventListener("click", () => {
  if (words.length > 0) {
    const random = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = random;
    document.getElementById("copy-icon").style.display = "block";
  }
});

document.getElementById("copy-icon").addEventListener("click", () => {
  const word = document.getElementById("word").textContent;
  navigator.clipboard.writeText(word);

  const icon = document.getElementById("copy-icon");
  icon.classList.add("flash");
  setTimeout(() => icon.classList.remove("flash"), 200);
});
