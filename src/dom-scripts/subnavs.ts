// Sets up the subnavs on the top head nav menu
export function setupSubnavs() {
  const attr = "data-subnav-state";

  function toggleSubnav(ev: Event) {
    const element = ev.currentTarget as HTMLElement;

    if (element.getAttribute(attr) === "1") {
      element.setAttribute(attr, "0");
      return;
    }

    element.setAttribute(attr, "1");
  }

  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    el.addEventListener("click", toggleSubnav);
  });
}
