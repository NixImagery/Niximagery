$(function() {
  'use strict';

  /* =======================
  // Toggle Menu and Search
  ======================= */
  var $menuOpenButton = $(".menu-button"),
      $menuCloseButton = $(".menu-close"),
      $navMenu = $(".nav-menu"),

      $searchOpenButton = $(".search-button"),
      $searchCloseButton = $(".search-close-button"),
      $search = $(".search");

  $(window).on("resize", function () {
    var e = $(this);
    if (e.width() >= 991) {
      $navMenu.removeClass("active"); // Remove class - "active" if width window more than 991px
    }
  });

  $menuOpenButton.on("click", function() {
    openMenu();
  });

  $menuCloseButton.on("click", function() {
    closeMenu();
  });

  $searchOpenButton.on("click", function() {
    openSearch();
  });

  $searchCloseButton.on("click", function() {
    closeSearch();
  });


  function openMenu() {
    $navMenu.addClass("active");
  }

  function closeMenu() {
    $navMenu.removeClass("active");
  }

  function openSearch() {
    $search.addClass("active");
  }

  function closeSearch() {
    $search.removeClass("active");
  }


  /* =======================
  // Reveal Image
  ======================= */
  var ww = window.innerWidth,
    wh = window.innerHeight;

  $(window).ready(function () {
    $('body').waitForImages({
      finished: function () {
        setTimeout(function () {
          $('.preloader').addClass('hide');

          setTimeout(function () {
            reveals();
          }, 100);
        }, 500);
      },
      waitForAll: true
    });
  });

  function reveals() {
    $(window).on('scroll', function () {
      $(".article-box, .article-first, .post-image-box, .page-image-box, .post-body img, .page-body img, .recent-header").each(
        function(i) {
          var el_top = $(this).offset().top,
            win_bottom = wh + $(window).scrollTop();

          if (el_top < win_bottom) {
            $(this)
              .delay(i * 80)
              .queue(function() {
                $(this).addClass("reveal-in");
              });
          }
        }
      );
    }).scroll();
  }

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function () {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

});
