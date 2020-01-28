console.log('index js loaded');
var classStringArray = [];

$( document ).ready(function() {
  var classObjArray = [];
  for(var j=1; j<=50; j++) {
    for(var i=1; i<=50; i++){
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

  
  for(var k=0; k<=2499; k++) {
    
    var classString ="row"+classObjArray[k].row+"column"+classObjArray[k].column;
    classStringArray.push(classString);
  }


console.log(classStringArray);
  for(var x=1; x<=2500; x++) {

    var div =   $('<div/>').addClass(classStringArray[x]); 
    div.css({"width" : "100%", "height" : "100%"});
 
    $('.messenger-box').append(div);
  }
  // $(".row5column5").css({"width" : "100%", "height" : "100%", "background":"black"});
});


let timerRed = (time, cls) => {
  setTimeout(() => {
    $(cls).css({"background": "rgb(255, 95, 95)" })
  }, time)
}

let timerBlue = (time, cls) => {
  setTimeout(() => {
    $(cls).css({"background": "rgb(53,147,207)" })
  }, time)
}

let timerGreen = (time, cls) => {
  setTimeout(() => {
    $(cls).css({"background": "rgb(81, 255, 139)" })
  }, time)
}

let timeArray=[]
for (let i=0; i<=2499; i++) {
  timeArray[i] = i*10 +20
}

console.log('time array', timeArray);




$('.messenger-box').hover(

  function() {
    for (let i=0; i<=2499; i+=11) {
      let clss = '.'+classStringArray[i];
      console.log('class', clss)
      let timme = timeArray[i]
      console.log('time', timme)
      timerRed(timme, clss);
    }
    for (let i=2; i<=2499; i+=11) {
      let clss = '.'+classStringArray[i];
      let timme = timeArray[i]
      timerBlue(timme, clss);
    }
    for (let i=4; i<=2499; i+=11) {
      let clss = '.'+classStringArray[i];
      let timme = timeArray[i]
      timerGreen(timme, clss);
    }

  },
  //   var randomNumber = Math.floor(Math.random()*2500); 
  //   ;
  //   var randomClass= '.'+classStringArray[randomNumber];
  //  console.log($(randomClass))
  //   $(randomClass).css({"background": "green" })



  // for()

    // setTimeout(()=> {
    //   $('.row25column25').css({"background": "green" })
    // },1000)

    // for(var j=1; j<=50; j++) {
    //   for(var i=1; i<=50; i++){
    //     var coordinatesObject = 
    //     {
    //       row: 0,
    //       column: 0
    //     };
    //     coordinatesObject.column= i;
    //     coordinatesObject.row=j;
    //     classObjArray.push(coordinatesObject)
    //   }
    // }

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
 
