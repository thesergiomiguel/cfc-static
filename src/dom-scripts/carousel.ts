// Will attach listeners to all [data-carousel-{left|right}]
// If a `data-distance` attribute exists, scroll by that. Otherwise
// use a default distance.
function getScrollingDistance(given: string | undefined, target: HTMLElement) {
  if (!given) {
    return;
  }

  if (given === "block") {
    return target.clientWidth;
  }

  return parseInt(given);
}

export function setupCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((el) => {
    const element = el as HTMLElement;
    const target = element.dataset.target;

    if (!target) {
      return;
    }

    const targetEl = document.querySelector(target);

    if (!targetEl) {
      return;
    }

    const left = element.querySelector("[data-left]");
    const right = element.querySelector("[data-right]");

    left?.addEventListener("click", () => {
      const distance = getScrollingDistance(
        element.dataset.distance,
        targetEl as HTMLElement
      );

      if (!distance) {
        return;
      }

      targetEl.scrollBy({
        left: -1 * distance,
        behavior: "smooth",
      });
    });

    right?.addEventListener("click", () => {
      const distance = getScrollingDistance(
        element.dataset.distance,
        targetEl as HTMLElement
      );

      if (!distance) {
        return;
      }

      targetEl.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    });
  });
}
