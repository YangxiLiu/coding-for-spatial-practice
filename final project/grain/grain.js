const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const button13 = document.getElementById("button13");
const button14 = document.getElementById("button14");
const button15 = document.getElementById("button15");
const button16 = document.getElementById("button16");


button1.addEventListener("click", function() {
  document.body.style.backgroundColor = "#dcc7e0";
  
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "#bba1cb";
});

button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "#a67eb7";
});

button4.addEventListener("click", function() {
  document.body.style.backgroundColor = "#7d5384";
});

button5.addEventListener("click", function() {
    document.body.style.backgroundColor = "#a8bf8f";
});
  
button6.addEventListener("click", function() {
    document.body.style.backgroundColor = "#67935c";
});
  
button7.addEventListener("click", function() {
    document.body.style.backgroundColor = "#4c8045";
});
  
button8.addEventListener("click", function() {
    document.body.style.backgroundColor = "#436a37";
});

button9.addEventListener("click", function() {
    document.body.style.backgroundColor = "#aed0ee";
});
  
button10.addEventListener("click", function() {
    document.body.style.backgroundColor = "#6d9bc5";
});
  
button11.addEventListener("click", function() {
    document.body.style.backgroundColor = "#334f6b";
});
  
button12.addEventListener("click", function() {
    document.body.style.backgroundColor = "#14393e";
});
  
button13.addEventListener("click", function() {
      document.body.style.backgroundColor = "#bd8254";
});
    
button14.addEventListener("click", function() {
      document.body.style.backgroundColor = "#945635";
});
    
button15.addEventListener("click", function() {
      document.body.style.backgroundColor = "#804c2d";
});
    
button16.addEventListener("click", function() {
      document.body.style.backgroundColor = "#5b3222";
});

function changeText(buttonId) {
    var colorname = document.getElementById("colorname");
    var ct1 = document.getElementById("colortext1");
    var number = document.getElementById("number");
  
    switch (buttonId) {
      case "button1":
        colorname.innerHTML = "昌荣";
        ct1.innerHTML = "CANGRONG";
        number.innerHTML = "#DCC7E0";
        break;
      case "button2":
        colorname.innerHTML = "紫薄汗";
        ct1.innerHTML = "ZIBOHAN";
        number.innerHTML = "#BBA1CB";
        break;
      case "button3":
        colorname.innerHTML = "茈藐";
        ct1.innerHTML = "ZIMIAO";
        number.innerHTML = "#A67EB7";
        break;
      case "button4":
        colorname.innerHTML = "紫紶";
        ct1.innerHTML = "ZIQIU";
        number.innerHTML = "#7D5384";
        break;
      case "button5":
        colorname.innerHTML = "苍葭";
        ct1.innerHTML = "CANGJIA";
        number.innerHTML = "#A8BF8F";
        break;
      case "button6":
        colorname.innerHTML = "庭芜绿";
        ct1.innerHTML = "TINGWULV";
        number.innerHTML = "#67935C";
        break;
      case "button7":
        colorname.innerHTML = "翠微";
        ct1.innerHTML = "CUIWEI";
        number.innerHTML = "#4C8045";
        break;
      case "button8":
        colorname.innerHTML = "翠虬";
        ct1.innerHTML = "CUIQIU";
        number.innerHTML = "#436A37";
        break;
      case "button9":
        colorname.innerHTML = "碧落";
        ct1.innerHTML = "BILUO";
        number.innerHTML = "#AED0EE";
        break;
      case "button10":
        colorname.innerHTML = "挼蓝";
        ct1.innerHTML = "RUOLAN";
        number.innerHTML = "#6D9BC5";
        break;
      case "button11":
        colorname.innerHTML = "青雀";
        ct1.innerHTML = "QINGQUE";
        number.innerHTML = "#334F6B";
        break;
      case "button12":
        colorname.innerHTML = "螺子黛";
        ct1.innerHTML = "LUOZIDAI";
        number.innerHTML = "#14393E";
        break;
      case "button13":
        colorname.innerHTML = "露褐";
        ct1.innerHTML = "LUHE";
        number.innerHTML = "#BD8254";
        break;
      case "button14":
        colorname.innerHTML = "檀褐";
        ct1.innerHTML = "TANHE";
        number.innerHTML = "#945635";
        break;
      case "button15":
        colorname.innerHTML = "緅絺";
        ct1.innerHTML = "ZOUCHI";
        number.innerHTML = "#804C2D";
        break;
      case "button16":
        colorname.innerHTML = "目童子";
        ct1.innerHTML = "MUTONGZI";
        number.innerHTML = "#5B3222";
        break;
        
    
    }
  }