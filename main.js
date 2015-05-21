//add class "hide" to all the paras, then removes it for the first one

$("section p").addClass("hide");
$("section p:first").removeClass("hide");

//when one of the buttons is clicked

  $("section button").on("click", function () {

  //add class hidden to the paragraphs inside section
  $("section p").addClass("hide");

  //but this is a function connected to '.on ("click")' for all the buttons, I'm removing the class "hidden" for the one that actually got clicked

  $(this).next().removeClass("hide");

});