console.log('index js loaded');
var classStringArray = [];

$( document ).ready(function() {
  //creates an array of objects with two key value pairs row and column wich will end in  50 rows and columns i.e.a perfect squre
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
//accesses the array of key value pairsand converts to an arry of class name strings
  for(var k=0; k<=2499; k++) {
    var classString ="row"+classObjArray[k].row+"column"+classObjArray[k].column;
    classStringArray.push(classString);
  }


console.log(classStringArray);

//creates divs and attaches the classes from the array above to add to the flexbox container div
  for(var x=1; x<=2500; x++) {

    var div =   $('<div/>').addClass(classStringArray[x]); 
    div.css({"width" : "100%", "height" : "100%"});
 
    $('.messenger-box').append(div);
  }
  // $(".row5column5").css({"width" : "100%", "height" : "100%", "background":"black"});
});

var bannerTextElements = document.querySelectorAll('.banner-title');
for(var i=0; i<bannerTextElements.length; i++) {
  var bannerTextArry = []
  var joinedArray = '';
  console.log(bannerTextElements[i].textContent)
  for(var j=0; j<bannerTextElements[i].textContent.length; j++) {
    // var span = $('<span/>').addClass('image-banner-font').text(bannerText)
    var spanText = `<span class="image-banner-font">${bannerTextElements[i].textContent[j].toUpperCase()}</span>`;
    bannerTextArry.push(spanText);
    
  }
  var joinedArray = bannerTextArry.join(' ');
  var title = '.banner-title-'+i;
  console.log(title);
  console.log(joinedArray)
  $(title).html(joinedArray);
}

console.log($('.details-icon'))
var detailsIcons = $('.details-icon');
for(var i=0; i<detailsIcons.length; i++) {
  var classString = '.details-icon-'+i;
  $(classString).click(function(){


    
    var index = $(this).attr('data');
    console.log('index', index);
    var descriptionDivClassName = '.description-'+index;
  
    if($(descriptionDivClassName).hasClass('description-show')) {
      $(descriptionDivClassName).removeClass('description-show');
      $(descriptionDivClassName).addClass('description-hide')
    } else {
      $(descriptionDivClassName).removeClass('description-hide')
      $(descriptionDivClassName).addClass('description-show') 
    }
    
  })
  
}

// $('.details-icon').click(function(){

//   var index = $('.details-icon').attr('data');
//   var descriptionDivClassName = '.description-'+index;

//   if($(descriptionDivClassName).hasClass('description-show')) {
//     $(descriptionDivClassName).removeClass('description-show');
//     $(descriptionDivClassName).addClass('description-hide')
//   } else {
//     $(descriptionDivClassName).removeClass('description-hide')
//     $(descriptionDivClassName).addClass('description-show') 
//   }
  
// })

$(window).scroll(function() {
  var $height = $(window).scrollTop();
  console.log($height);

  if($height >= 210) {
    $('.github-left').addClass('animate-top-right');
    $('.window-left').addClass('animate-bottom-left');
  } else {
    $('.github-left').removeClass('animate-top-right');
    $('.window-left').removeClass('animate-bottom-left');
  }


  if($height >= 560) {
    $('.project-left-title').addClass('title-bulge-out');
    $('.project-left-feature1').addClass('bulge-out-2');
    $('.project-left-feature2').addClass('bulge-out-3');
    $('.project-left-feature3').addClass('bulge-out-4');
    $('.project-left-feature4').addClass('bulge-out-5');
    $('.project-left-feature5').addClass('bulge-out-6');

    $('.project-right-title').addClass('title-bulge-out');
    $('.project-right-feature1').addClass('bulge-out-2');
    $('.project-right-feature2').addClass('bulge-out-3');
    $('.project-right-feature3').addClass('bulge-out-4');
    $('.project-right-feature4').addClass('bulge-out-5');
    $('.project-right-feature5').addClass('bulge-out-6');
  } else {
    $('.project-left-title').removeClass('title-bulge-out');
    $('.project-left-feature1').removeClass('bulge-out-2');
    $('.project-left-feature2').removeClass('bulge-out-3');
    $('.project-left-feature3').removeClass('bulge-out-4');
    $('.project-left-feature4').removeClass('bulge-out-5');
    $('.project-left-feature5').removeClass('bulge-out-6');

    $('.project-right-title').removeClass('title-bulge-out');
    $('.project-right-feature1').removeClass('bulge-out-2');
    $('.project-right-feature2').removeClass('bulge-out-3');
    $('.project-right-feature3').removeClass('bulge-out-4');
    $('.project-right-feature4').removeClass('bulge-out-5');
    $('.project-right-feature5').removeClass('bulge-out-6');
  }


  if($height >= 710) {
    $('.github-right').addClass('animate-top-right');
    $('.window-right').addClass('animate-bottom-left');
  } else {
    $('.github-right').removeClass('animate-top-right');
    $('.window-right').removeClass('animate-bottom-left');
  }
  // if($height > 50) {
	// 	$('#header').addClass('active');
	// } else {
	// 	$('#header').removeClass('active');
	// }
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
 
