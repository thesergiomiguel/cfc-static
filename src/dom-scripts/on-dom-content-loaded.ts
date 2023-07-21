import { setup as setupSidebars } from "./sidebars";

function onDOMContentLoaded(cb: () => void) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cb);
  } else {
    cb();
  }
}

export function setup() {
  onDOMContentLoaded(() => {
    setupSidebars();
  });
}
