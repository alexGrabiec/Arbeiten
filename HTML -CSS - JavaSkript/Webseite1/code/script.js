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


  //Referenzen///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function nachRechts(){
    
    const Grid = document.querySelector('.Referenzen_Grid')
    const GridStyle = getComputedStyle(Grid)
    const animationName = GridStyle.animationName

    if(animationName == "none"){
    document.getElementById("Referenzen_Grid_id").style.animationName="moveRight1";
    document.getElementById("Referenzen_Container1").style.height="200px";
    document.getElementById("Referenzen_Container1").style.opacity="0.3";
    document.getElementById("Referenzen_Container2").style.height="550px";
    document.getElementById("Referenzen_Container2").style.opacity="1";
    document.getElementById("Referenzen_Container3").style.height="200px";
    document.getElementById("Referenzen_Container3").style.opacity="0.3";

    }

    if(animationName == "moveRight1"){
      document.getElementById("Referenzen_Grid_id").style.animationName="moveRight2";
      document.getElementById("Referenzen_Container1").style.height="200px";
      document.getElementById("Referenzen_Container1").style.opacity="0.3";
      document.getElementById("Referenzen_Container2").style.height="200px";
      document.getElementById("Referenzen_Container2").style.opacity="0.3";
      document.getElementById("Referenzen_Container3").style.height="550px";
      document.getElementById("Referenzen_Container3").style.opacity="1";
    }
    



    if(animationName == "moveLeft1"){
      document.getElementById("Referenzen_Grid_id").style.animationName="moveRight1";
      document.getElementById("Referenzen_Container1").style.height="200px";
      document.getElementById("Referenzen_Container1").style.opacity="0.3";
      document.getElementById("Referenzen_Container2").style.height="550px";
      document.getElementById("Referenzen_Container2").style.opacity="1";
      document.getElementById("Referenzen_Container3").style.height="200px";
      document.getElementById("Referenzen_Container3").style.opacity="0.3";
      }
      if(animationName == "moveLeft2"){
        document.getElementById("Referenzen_Grid_id").style.animationName="moveRight2";
        document.getElementById("Referenzen_Container1").style.height="200px";
        document.getElementById("Referenzen_Container1").style.opacity="0.3";
        document.getElementById("Referenzen_Container2").style.height="200px";
        document.getElementById("Referenzen_Container2").style.opacity="0.3";
        document.getElementById("Referenzen_Container3").style.height="550px";
        document.getElementById("Referenzen_Container3").style.opacity="1";
      }
      
  




  
  }

  function nachLinks(){

    const Grid = document.querySelector('.Referenzen_Grid')
    const GridStyle = getComputedStyle(Grid)
    const animationName = GridStyle.animationName

    if(animationName == "none"){
    document.getElementById("Referenzen_Grid_id").style.animationName="";
    document.getElementById("Referenzen_Container1").style.height="550px";
    document.getElementById("Referenzen_Container1").style.opacity="1";
    document.getElementById("Referenzen_Container2").style.height="200px";
    document.getElementById("Referenzen_Container2").style.opacity="0.3";
    document.getElementById("Referenzen_Container3").style.height="200px";
    document.getElementById("Referenzen_Container3").style.opacity="0.3";
    }
    if(animationName == "moveRight1"){
      document.getElementById("Referenzen_Grid_id").style.animationName="moveLeft1";
      document.getElementById("Referenzen_Container1").style.height="550px";
      document.getElementById("Referenzen_Container1").style.opacity="1";
      document.getElementById("Referenzen_Container2").style.height="200px";
      document.getElementById("Referenzen_Container2").style.opacity="0.3";
      document.getElementById("Referenzen_Container3").style.height="200px";
      document.getElementById("Referenzen_Container3").style.opacity="0.3";
    }
    if(animationName == "moveRight2"){
      document.getElementById("Referenzen_Grid_id").style.animationName="moveLeft2";
      document.getElementById("Referenzen_Container1").style.height="200px";
      document.getElementById("Referenzen_Container1").style.opacity="0.3";
      document.getElementById("Referenzen_Container2").style.height="550px";
      document.getElementById("Referenzen_Container2").style.opacity="1";
      document.getElementById("Referenzen_Container3").style.height="200px";
      document.getElementById("Referenzen_Container3").style.opacity="0.3";
    }
    

    

    if(animationName == "none"){
      document.getElementById("Referenzen_Grid_id").style.animationName="";
      document.getElementById("Referenzen_Container1").style.height="200px";
      document.getElementById("Referenzen_Container1").style.opacity="0.3";
      document.getElementById("Referenzen_Container2").style.height="200px";
      document.getElementById("Referenzen_Container2").style.opacity="1";
      document.getElementById("Referenzen_Container3").style.height="200px";
      document.getElementById("Referenzen_Container3").style.opacity="0.3";
      }
      if(animationName == "moveLeft2"){
        document.getElementById("Referenzen_Grid_id").style.animationName="moveLeft1";
        document.getElementById("Referenzen_Container1").style.height="500px";
        document.getElementById("Referenzen_Container1").style.opacity="1";
        document.getElementById("Referenzen_Container2").style.height="200px";
        document.getElementById("Referenzen_Container2").style.opacity="0.3";
        document.getElementById("Referenzen_Container3").style.height="200px";
        document.getElementById("Referenzen_Container3").style.opacity="0.3";
      }
      

  
  }

//Menü///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MenüButton(){
    document.getElementById("Mehr_dropdown2").style.display="unset";
  }
  function MenüButton2(){
    document.getElementById("Mehr_dropdown2").style.display="none";
  }

