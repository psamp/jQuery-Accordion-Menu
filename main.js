

$("section").on("click", function () {
  $(".content").removeClass("show");
  $(this).find($(".content")).addClass("show");
})