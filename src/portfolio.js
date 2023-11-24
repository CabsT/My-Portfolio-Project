document.addEventListener("DOMContentLoaded", function () {
  let text = "Front-end developer based in South Africa";
  let typingText = document.getElementById("typing-text");
  let index = 0;

  function type() {
    typingText.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(type, 100);
    }
  }
  type();
});
