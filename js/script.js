// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
  
    links.forEach((link) => {
      // If link is external or has no href, skip
      if (!link.href.includes(window.location.host)) return;
  
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
  
        // Add fade-out class to body
        document.body.classList.add("fade-out");
  
        // Wait for the transition to finish, then navigate
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    });
  });
  