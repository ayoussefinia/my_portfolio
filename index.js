console.log('index js loaded');
var classStringArray = [];
$( document ).ready(function() {
  var classObjArray = [];
  for(var j=1; j<=10; j++) {
    for(var i=1; i<=10; i++){
      var coordinatesObject = 
      {
        row: 0,
        column: 0
      };
      coordinatesObject.column= i;
      coordinatesObject.row=j;
      classObjArray.push(coordinatesObject)
    }
  }

  // console.log(classObjArray);

  
  for(var k=1; k<=99; k++) {
    
    var classString ="row"+classObjArray[k].row+"column"+classObjArray[k].column;
    classStringArray.push(classString);
  }


console.log(classStringArray);
  for(var x=1; x<=100; x++) {

    var div =   $('<div/>').addClass(classStringArray[x]); 
    div.css({"width" : "100%", "height" : "100%"});
 
    $('.messenger-box').append(div);
  }
  // $(".row5column5").css({"width" : "100%", "height" : "100%", "background":"black"});
});

$('.messenger-box').hover(
  
  function() {

    var randomNumber = Math.floor(Math.random()*100); 
    ;
    var randomClass= '.'+classStringArray[randomNumber];
   console.log($(randomClass))
    $(randomClass).css({"width" : "100%", "height" : "100%", "background": "green" }) 

    // $('.row5column5').css("background", "black")
  },
  function() {
    console.log('exited');
  }
)

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
 
