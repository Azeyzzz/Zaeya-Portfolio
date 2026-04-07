// Sort portfolio blocks by last updated date (newest first)
document.addEventListener("DOMContentLoaded", () => {
  const portfolios = [".current-proj", ".past-proj"];

  portfolios.forEach((selector) => {
    const container = document.querySelector(selector);
    if (!container) return;

    const blocks = Array.from(container.querySelectorAll(".port-block0"));

    blocks.sort((a, b) => {
      const aText = a.querySelector(".project-date")?.textContent?.trim() ?? "";
      const bText = b.querySelector(".project-date")?.textContent?.trim() ?? "";
      return new Date(bText) - new Date(aText);
    });

    blocks.forEach((block) => container.appendChild(block));
  });
});
