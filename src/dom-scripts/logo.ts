export function setupLogoAnimation() {
  const shell = document.getElementById("logo-toggle");

  shell?.addEventListener("click", () => {
    shell.classList.toggle("Logo__shell--toggled");
  });
}
