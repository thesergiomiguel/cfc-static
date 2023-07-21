// Sets listeners on elements with one of:
//  - [data-open-sidebar="%id"]
//  - [data-close-sidebar="%id"]
// Besides, [data-open-delay="%ms"] can be used to delay
// a sidebar's opening

const CLOSING_CLASS_NAME = "Sidebar--closing";
const OPEN_CLASS_NAME = "Sidebar--open";
const BACKDROP_CLASSNAME = "with-backdrop";

function open(element: HTMLElement | null) {
  if (!element) {
    return;
  }

  element.classList.add(OPEN_CLASS_NAME);
  document.body.classList.add(BACKDROP_CLASSNAME);
}

function close(element: HTMLElement | null) {
  if (!element) {
    return;
  }

  element.classList.add(CLOSING_CLASS_NAME);
  element.classList.remove(OPEN_CLASS_NAME);
  document.body.classList.remove(BACKDROP_CLASSNAME);

  setTimeout(() => {
    element.classList.remove(CLOSING_CLASS_NAME);
  }, 250);
}

export function setup() {
  const openers = document.querySelectorAll("[data-open-sidebar]");
  const closers = document.querySelectorAll("[data-close-sidebar]");

  closers.forEach((element) => {
    const id = element.getAttribute("data-close-sidebar");

    if (!id) {
      return;
    }

    const target = document.getElementById(id);
    element.addEventListener("click", () => close(target));
  });

  openers.forEach((element) => {
    const id = element.getAttribute("data-open-sidebar");

    if (!id) {
      return;
    }

    const target = document.getElementById(id);
    const delay = parseInt(element.getAttribute("data-open-delay") ?? "0");

    if (delay > 0) {
      element.addEventListener("click", () => {
        setTimeout(() => open(target), delay);
      });

      return;
    }

    element.addEventListener("click", () => open(target));
  });

  // Setup backdrop to close all open sidebars on click.
  document
    .querySelector(".Sidebar__backdrop")
    ?.addEventListener("click", () => {
      document
        .querySelectorAll(`.${OPEN_CLASS_NAME}`)
        .forEach((el) => close(el as HTMLElement));
    });
}
