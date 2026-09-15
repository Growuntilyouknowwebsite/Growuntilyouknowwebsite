/*
  WEEKLY CONTENT
  Update only the words between quotation marks below when you want
  to refresh the website's weekly recommendations.
*/
const weeklyFeatures = {
  beverage: {
    title: "Cucumber, Lemon & Mint Water",
    copy: "Add fresh cucumber, lemon slices, and mint to cold water for a colorful, refreshing way to make hydration feel special.",
    tip: "Try it: Prepare a pitcher and chill it before serving."
  },
  meal: {
    title: "Colorful Build-Your-Own Bowl",
    copy: "Layer brown rice or quinoa with leafy greens, roasted vegetables, beans, and a favorite protein for a flexible family meal.",
    tip: "Grow together: Let each family member choose a colorful topping."
  },
  fruit: {
    title: "The Crisp, Colorful Apple",
    copy: "Apples are portable, naturally sweet, and easy to pair with breakfast, lunch, or an afternoon snack.",
    tip: "Explore: Compare two varieties and describe their taste and texture."
  },
  exercise: {
    title: "The Grow-and-Go Family Walk",
    copy: "Take a comfortable 15-to-20-minute walk and notice five interesting things in your surroundings.",
    tip: "Make it yours: Choose a pace and duration that feel safe for you."
  },
  quote: {
    title: "Keep Growing",
    copy: "“Growth does not ask us to know everything today. It simply asks us to remain willing to learn tomorrow.”",
    tip: "— Author Annette Cottingham"
  }
};

Object.entries(weeklyFeatures).forEach(([feature, content]) => {
  Object.entries(content).forEach(([field, value]) => {
    const element = document.getElementById(feature + "-" + field);
    if (element) element.textContent = value;
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
