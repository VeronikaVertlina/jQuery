// document.querySelector("h1").style.color = "red";

// $("h1").css("font-size", "5rem");

//--------------Manipulating Styles with jQuery
$("h1").addClass("big-title margin-50");


//-------------Manipulating Text with jQuery
$("h1").text("Bye");

$("button").text("Don't click me"); //Selected all buttons to change

$("button").html("<em>Hey</em>");

//------------Manipulating Attributes with jQuery
$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");

//-----------Adding Event Listener with jquery
$("h1").click(function() {
  $("h1").css("color", "purple");
});

//----If we need to change all of set buttons we need to use loop weth JavaScript
// for ( var i = 0; i < 5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

//----The same but with using jquery
$("button").click(function() {
  $("h1").css("color", "purple");
});

//---------Using Kewdown Elements
$("input").keydown(function(event) {
  $("h1").text(event.key);
});

//-------Detet for mouseover Events
// $("h1").on("mouseover", function(){
//   $("h1").css("color", "purple");
// });

//-------Or insted of On using click
// $("h1").on("click", function(){
//   $("h1").css("color", "purple");
// });
//
// //---------Website Animation with jquery - hide(), show(), toggle(), fadeOut(), fadeIn(), fadeToggle()
// //---------slideUp(), slideDown(), slideToggle()
// $("button").on("click", function() {
//   $("h1").slideToggle();
// });

//-------------animate() - opacity:0.5, margin:20, margin:"20%"
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
