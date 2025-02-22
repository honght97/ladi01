jQuery(document).ready(function ($) {
  function MatchHeight() {
    if ($(".tl-item").length) {
      $(".tl-item").matchHeight({});
    }
    if ($(".forte-inner").length) {
      $(".forte-inner").matchHeight({});
    }
    if ($(".provider-card").length) {
      $(".provider-card").matchHeight({});
    }
  }

  MatchHeight();
  $(document).ajaxComplete(function () {
    MatchHeight();
    AOS.refresh();
  });
});
