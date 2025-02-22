export default function MenuModule() {
  let width = $(window).width();
  if (width < 768) {
    if ($(".js-bar").length) {
      $(".js-bar").on("click", function () {
        $(".js-header-mobile").addClass("is-active");
        $(this).addClass("is-active");
        $(".overlay").addClass("is-active");
        $(".main").addClass("is-active");
        $(".js-header").addClass("is-active");
        $("html").off("touchmove");
        if ($(this).hasClass("is-active")) {
          $("body").css("overflow", "hidden");
        }
      });
    }

    if ($(".js-header-close").length) {
      $(".js-header-close").on("click", function () {
        $(".js-header-mobile").removeClass("is-active");
        $(".overlay").removeClass("is-active");
        $(".js-bar").removeClass("is-active");
        $(".main").removeClass("is-active");
        $(".js-header").removeClass("is-active");
        $("body").css("overflow", "hidden auto");
      });
    }

    if ($(".overlay").length) {
      $(".overlay").on("click", function () {
        $(".overlay").removeClass("is-active");
        $(".js-header-mobile").removeClass("is-active");
        $(".main").removeClass("is-active");
        $(".js-header").removeClass("is-active");
        $(".js-bar").removeClass("is-active");
        $("body").css("overflow", "hidden auto");
      });
    }

    // if ($(".dropdown .child").length) {
    //   $(".dropdown:not(.header-account) .child").hide();
    //   $(".dropdown:not(.header-account)").click(function () {
    //     $(this).toggleClass("is-active");
    //     $(this).find(".child").stop().slideToggle();
    //   });
    // }
  }

  // onscroll
  // let header;
  // if ($(".js-header").length) {
  //   header = $(".js-header");
  // }
  // $(window).scroll(function () {
  //   if ($(document).scrollTop() > 50) {
  //     header.addClass("is-fixed");
  //   } else {
  //     header.removeClass("is-fixed");
  //   }
  // });

  // $(document).ready(function () {
  //   if ($(this).scrollTop() > 50) {
  //     header.addClass("is-fixed");
  //   } else {
  //     header.removeClass("is-fixed");
  //   }
  // });

  // hide header
  // $(document).ready(function () {
  //   let lastScrollTop = 0;
  //   $(window).scroll(function () {
  //     let currentScroll = $(this).scrollTop();
  //     if (currentScroll > lastScrollTop && currentScroll > 100) {
  //       header.addClass("is-hidden");
  //       // if (width > 991) {
  //       //   if ($(".js-sidebar").length) {
  //       //     $(".js-sidebar").addClass("is-top");
  //       //   }
  //       // }
  //     } else {
  //       header.removeClass("is-hidden");
  //       // if (width > 991) {
  //       //   if ($(".js-sidebar").length) {
  //       //     $(".js-sidebar").removeClass("is-top");
  //       //   }
  //       // }
  //     }

  //     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  //   });
  // });

  // ================= get height of footer ==========
  function vh(percent) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (percent * h) / 100;
  }
  let heightFooter;
  if ($(".js-footer").length) {
    heightFooter = $(".js-footer").outerHeight(true);
  } else {
    heightFooter = 0;
  }
  let heightHeight;
  if ($(".js-header").length) {
    heightHeight = $(".js-header").outerHeight(true);
  } else {
    heightHeight = 0;
  }

  let mainHeight = vh(100) - heightFooter;
  if ($(".main").length) {
    // $(".main").css("padding-top", heightHeight);
    $(".main").css("min-height", mainHeight);
  }

  // ==================== open cart =============
  // if ($(".js-icon-cart").length) {
  //   $(".js-icon-cart").click(function () {
  //     $(".js-cart-overlay").addClass("is-active");
  //     $(".js-cart").addClass("is-active");
  //     $("html").off("touchmove");
  //     $("html").addClass("no-scroll");
  //     if ($("body").hasClass("mobile-detect")) {
  //       $("body").css("overflow", "initial");
  //     }
  //   });
  // }
  // if ($(".js-cart-close").length) {
  //   $(".js-cart-close").click(function () {
  //     $(".js-cart-overlay").removeClass("is-active");
  //     $(".js-cart").removeClass("is-active");
  //     $("html").removeClass("no-scroll");
  //     if ($("body").hasClass("mobile-detect")) {
  //       $("body").css("overflow", "hidden auto");
  //     }
  //   });
  // }
  // if ($(".js-cart-overlay").length) {
  //   $(".js-cart-overlay").click(function () {
  //     $(this).removeClass("is-active");
  //     $(".js-cart").removeClass("is-active");
  //     $("html").removeClass("no-scroll");
  //     if ($("body").hasClass("mobile-detect")) {
  //       $("body").css("overflow", "hidden auto");
  //     }
  //   });
  // }
  // // add promote
  // if ($(".js-add-coupon").length) {
  //   $(".js-add-coupon").click(function () {
  //     $(this).addClass("is-active");
  //     $(".js-coupon-input").addClass("is-active");
  //   });
  // }
  // mona extension
  // if ($("#wpadminbar").length) {
  //   if (width <= 782) {
  //     if ($(".header-mobile").length) {
  //       $($(".header-mobile")).css("top", "46px");
  //     }
  //     if ($(".cart-wrap").length) {
  //       $(".cart-wrap").css("top", "46px");
  //     }
  //   } else {
  //     if ($(".cart-wrap").length) {
  //       $(".cart-wrap").css("top", "32px");
  //     }
  //   }
  // }
}
