  // Hide disclaimer when user scrolls
  window.addEventListener("scroll", function() {
    const disclaimer = document.getElementById("disclaimer");
    if (window.scrollY > 0) {
      disclaimer.style.transition = "opacity 0.5s ease";
      disclaimer.style.opacity = "0";
      setTimeout(() => {
        disclaimer.style.display = "none";
      }, 500);
    }
  });
