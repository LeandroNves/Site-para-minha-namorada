$(document).ready(function () {
  $(".container").mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});


$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".year-of-dating").addClass("open");
    })
    .mouseleave(function () {
      $(".year-of-dating").removeClass("open");
    });
});
