$('.carousel').carousel({
  interval: 2000
})

function viewDiv(){
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
  };

function viewDiv1(){
    document.getElementById("div2").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
  };

  function viewDiv2(){
    document.getElementById("div3").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
  };
  
  function viewDiv4(){
    document.getElementById("tsh2").style.display = "block";
    document.getElementById("button").style.display = "none";
  };





  




