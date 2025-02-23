jQuery(document).ready(function ($) {
  function MatchHeight() {
    if ($(".tl-item").length) {
      $(".tl-item").matchHeight({});
    }
    if ($(".forte-inner").length) {
      $(".forte-inner").matchHeight({});
    }
    if ($(".products-wrap .provider-card").length) {
      $(".products-wrap .provider-card").matchHeight({});
    }
    if ($(".provider-it .provider-card").length) {
      $(".provider-it .provider-card").matchHeight({});
    }
  }

  MatchHeight();
  $(document).ajaxComplete(function () {
    MatchHeight();
    AOS.refresh();
  });
});
