import { setupSidebars } from "./sidebars";
import { setupNavs } from "./subnavs";

function onDOMContentLoaded(cb: () => void) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cb);
  } else {
    cb();
  }
}

export function init() {
  onDOMContentLoaded(() => {
    setupSidebars();
    setupNavs();
  });
}
