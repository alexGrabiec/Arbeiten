// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
    myFunction()
    myFunction2()
    myFunction3()

    myFunction4()
    myFunction5()
    myFunction6()
    myFunction7()
};
//Striche
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 300 - 0;
  document.getElementById("myBar1").style.height = scrolled + "%";
  
}

function myFunction2() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 200 - 10;
  document.getElementById("myBar2").style.height = scrolled + "%";
  
}

function myFunction3() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 200 - 50;
document.getElementById("myBar3").style.height = scrolled + "%";

}
//Kreise

function myFunction4() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 400 - 50;
  document.getElementById("myKreis1").style.height = scrolled + "%";
}

  function myFunction5() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 400 - 50;
    document.getElementById("myKreis2").style.height = scrolled + "%";
  }

    function myFunction6() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 400 - 50;
      document.getElementById("myKreis3").style.height = scrolled + "%";
    }

  function myFunction7() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 400 - 50;
  document.getElementById("myKreis4").style.height = scrolled + "%" ;
  }