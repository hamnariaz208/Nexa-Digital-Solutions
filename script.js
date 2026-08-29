// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");

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


// ================= THEME TOGGLE =================

const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");

  themeToggle.textContent = isDark ? "☀️" : "🌙";
  mobileThemeToggle.textContent = isDark ? "☀️" : "🌙";
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  updateThemeIcon();
}

themeToggle.addEventListener("click", toggleTheme);
mobileThemeToggle.addEventListener("click", toggleTheme);


// ================= MOBILE NAVIGATION =================

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    menuButton.classList.remove("hidden");
  });
});


// ================= FAQ ACCORDION =================

const faqButtons = document.querySelectorAll(".faq-button");
const accordionContents = document.querySelectorAll(".accordion-content");
const faqIcons = document.querySelectorAll(".faq-icon");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentContent = button.nextElementSibling;
    const currentIcon = button.querySelector(".faq-icon");

    const wasOpen = !currentContent.classList.contains("hidden");

    accordionContents.forEach((content) => {
      content.classList.add("hidden");
    });

    faqIcons.forEach((icon) => {
      icon.textContent = "+";
    });

    if (!wasOpen) {
      currentContent.classList.remove("hidden");
      currentIcon.textContent = "−";
    }
  });
});


// ================= NEWSLETTER VALIDATION =================

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Email is required.";
    emailInput.classList.remove("border-green-500");
    emailInput.classList.add("border-red-500");
  } 
  else if (!email.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    emailInput.classList.remove("border-green-500");
    emailInput.classList.add("border-red-500");
  } 
  else {
    emailError.textContent = "Valid email ✓";
    emailInput.classList.remove("border-red-500");
    emailInput.classList.add("border-green-500");
  }
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    emailInput.classList.remove("border-green-500");
    emailInput.classList.add("border-red-500");
    return;
  }

  alert("Thank you! You have successfully subscribed.");

  newsletterForm.reset();
  emailError.textContent = "";
  emailInput.classList.remove("border-green-500");
});