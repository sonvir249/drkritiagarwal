document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Close menu when a navigation item is clicked
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  }

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section, header");
  const navItems = document.querySelectorAll(".nav-links a:not(.btn-nav)");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop - 120) {
        current = section.getAttribute("id") || "";
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Appointment Form Submission Handler
  const appointmentForm = document.getElementById("appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const patientName = document.getElementById("fullName").value.trim();
      alert(
        `Thank you, ${patientName}. Your consultation request has been recorded. Our team will contact you shortly to confirm the appointment.`,
      );
      appointmentForm.reset();
    });
  }
});
