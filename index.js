console.log('index js loaded');

$( "#portfolio-link" ).hover(
  function() {
    $(".portfolio-link-list").css("display", "block");
    $(".portfolio-link-list").removeClass("invisible");
    $(".portfolio-link-list").addClass("visible");
 
  }, function() {
    // $(".portfolio-link-list").css("display", "none")
    $(".portfolio-link-list").removeClass("visible");
    $(".portfolio-link-list").addClass("invisible");
  }
);
 