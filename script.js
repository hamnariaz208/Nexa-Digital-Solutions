  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const themeToggle= document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");

    menuButton.classList.add("hidden");
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");

    menuButton.classList.remove("hidden");
  });
  function toggleTheme(button) {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    mobileThemeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
    mobileThemeToggle.textContent = "🌙";
  }
}

themeToggle.addEventListener("click", () => {
  toggleTheme(themeToggle);
});

mobileThemeToggle.addEventListener("click", () => {
  toggleTheme(mobileThemeToggle);
});
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    menuButton.classList.remove("hidden");
  });
  
});
const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {

    const currentContent = button.nextElementSibling;
    const currentIcon = button.querySelector(".faq-icon");
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.classList.add("hidden");
    });
    document.querySelectorAll(".faq-icon").forEach((icon) => {
      icon.textContent = "+";
    });
    const wasOpen = !currentContent.classList.contains("hidden");
    if (!wasOpen) {
      currentContent.classList.remove("hidden");
      currentIcon.textContent = "−";
    }
  });
});
const emailInput = document.getElementById("emailInput");
const subscribeButton = document.getElementById("subscribeButton");
subscribeButton.addEventListener("click", function () {
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }
  alert(
    "Thank you for subscribing!\n\n" +
    "Email: " + emailInput.value + "\n" +
    "Status: Successfully Subscribed"
  );
 emailInput.value = "";
});