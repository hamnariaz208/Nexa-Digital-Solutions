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