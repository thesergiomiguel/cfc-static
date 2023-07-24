// On mobile resolutions, the widget should stick only until the page gets
// scrolled all the way down for the first time.
// On bigger resolutions, the widget is always sticky, but is hidden when
// the footer is in view; it is also dismissible.
//
// The following data attributes are used:
// data-has-completed - indicates that the page has been fully scrolled
// data-is-dismissed - true when the user has dismissed the widget
// data-is-intersecting - the page is currently scrolled all the way down

export function setupNewsletterWidget() {
  const widget = document.getElementById("newsletter-widget");
  const target = document.getElementById("main-footer");

  if (!widget || !target) {
    return;
  }

  widget.classList.add("NewsletterBar--visible");

  document
    .getElementById("newsletter-bar-dismiss")
    ?.addEventListener("click", () => {
      widget.setAttribute("data-is-dismissed", "1");
    });

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      widget?.setAttribute("data-has-completed", "1");
      widget?.setAttribute("data-is-intersecting", "1");
      return;
    }

    widget?.setAttribute("data-is-intersecting", "0");
  });

  observer.observe(target);
}
