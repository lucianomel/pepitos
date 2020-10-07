/*-------------PARA ANIMACION ANI.JS--------------- */
var element = $('#animacionWoober');

// when mouseover execute the animation
element.mouseover(function(){
  
  // the animation starts
  element.toggleClass('wobble animated');
  
  // do something when animation ends
  element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
   
   // trick to execute the animation again
    $(e.target).removeClass('wobble animated');
  
  });
  
});
var element2 = $('#animacionBounce');

// when mouseover execute the animation
element2.mouseover(function(){
  
  // the animation starts
  element2.toggleClass('bounce animated');
  
  // do something when animation ends
  element2.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
   
   // trick to execute the animation again
    $(e.target).removeClass('bounce animated');
  
  });
  
});
var element3 = $('#animacionBounce2');

// when mouseover execute the animation
element3.mouseover(function(){
  
  // the animation starts
  element3.toggleClass('bounce animated');
  
  // do something when animation ends
  element3.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
   
   // trick to execute the animation again
    $(e.target).removeClass('bounce animated');
  
  });
  
});

/*-------------PARA ANIMACION ANI.JS--------------- */