export default function HomeModule() {
  // Initialize Lenis
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  // Use requestAnimationFrame to continuously update the scroll
  if ($("a[rel='modal:open']").length) {
    $("a[rel='modal:open']").on("click", function () {
      $(this).modal({
        fadeDuration: 250,
      });
      return false;
    });
  }
  $(document).ready(function () {
    setTimeout(function () {
      $(".js-momal").modal("show");
      $("body").addClass("modal-open");
    }, 2000);
  });
}
