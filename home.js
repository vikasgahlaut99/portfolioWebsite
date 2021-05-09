$(document).ready(function(){
    $("#textTop").click(function() {
      $('html,body').animate({
          scrollTop: $("#name").offset().top},
          'fast');
  });
  $("#home").click(function() {
      $('html,body').animate({
          scrollTop: $("#name").offset().top},
          'fast');
  });
  $("#work").click(function() {
      $('html,body').animate({
          scrollTop: $("#workDiv").offset().top},
          'fast');
  });
  $("#projects").click(function() {
      $('html,body').animate({
          scrollTop: $("#projectsDiv").offset().top},
          'fast');
  });
  $("#skills").click(function() {
      $('html,body').animate({
          scrollTop: $("#skillBox").offset().top},
          'fast');
          $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: $(this).attr("data-width")
            },2000)
          }); 
  });
  $(".contactMe").click(function() {
      $('html,body').animate({
          scrollTop: $("#contactDivBlank").offset().top},
          'fast');
  });
  $(".img5").mouseenter(function(){
    $(".bar").each(function(){
      $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
      },1000)
    });      
  })
  
  });

  
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    if(window.innerWidth > 600)
    document.getElementById("navbarMain").style.top = "0";
    else
    document.getElementById("navbarMain").style.top = "12";
  }
  else {
    document.getElementById("navbarMain").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function showMore(a){
    var content = document.getElementById('c'+a);
    var heading = document.getElementById('p'+a);
    var button = document.getElementById('b'+a);
    var img = document.getElementById('i'+a);
    if(button.innerHTML === "more"){
      content.style.display="block";
      heading.style.fontSize="14px";
      button.innerHTML="less";
      img.style.height="100px";
      button.style.marginTop="3px";
      if(window.innerWidth <=600)
      {
        img.style.display="none";
      }
    }
    else{
      img.style.display ="block";
      content.style.display="none";
      heading.style.fontSize="20px";
      button.innerHTML = "more";
      img.style.height = "200px";
      button.style.marginTop="30px";
    }
}







