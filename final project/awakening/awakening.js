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
  document.body.style.backgroundColor = "#ba5b4a";
  
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "#a64036";
});

button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "#9d2a22";
});

button4.addEventListener("click", function() {
  document.body.style.backgroundColor = "#7c191e";
});

button5.addEventListener("click", function() {
    document.body.style.backgroundColor = "#f6bec8";
});
  
button6.addEventListener("click", function() {
    document.body.style.backgroundColor = "#f091a0";
});
  
button7.addEventListener("click", function() {
    document.body.style.backgroundColor = "#dc6b82";
});
  
button8.addEventListener("click", function() {
    document.body.style.backgroundColor = "#c35c5d";
});

button9.addEventListener("click", function() {
    document.body.style.backgroundColor = "#fedc5e";
});
  
button10.addEventListener("click", function() {
    document.body.style.backgroundColor = "#f9c03c";
});
  
button11.addEventListener("click", function() {
    document.body.style.backgroundColor = "#db9b33";
});
  
button12.addEventListener("click", function() {
    document.body.style.backgroundColor = "#c67914";
});
  
button13.addEventListener("click", function() {
      document.body.style.backgroundColor = "#9aa6b0";
});
    
button14.addEventListener("click", function() {
      document.body.style.backgroundColor = "#6a798e";
});
    
button15.addEventListener("click", function() {
      document.body.style.backgroundColor = "#44465e";
});
    
button16.addEventListener("click", function() {
      document.body.style.backgroundColor = "#2a2f3b";
});

function changeText(buttonId) {
    var colorname = document.getElementById("colorname");
    var ct1 = document.getElementById("colortext1");
    var number = document.getElementById("number");
  
    switch (buttonId) {
      case "button1":
        colorname.innerHTML = "赤缇";
        ct1.innerHTML = "CHITI";
        number.innerHTML = "#BA5B4A";
        break;
      case "button2":
        colorname.innerHTML = "朱草";
        ct1.innerHTML = "ZHUCAO";
        number.innerHTML = "#A64036";
        break;
      case "button3":
        colorname.innerHTML = "綪茷";
        ct1.innerHTML = "QIANFA";
        number.innerHTML = "#9D2A22";
        break;
      case "button4":
        colorname.innerHTML = "顺圣";
        ct1.innerHTML = "SHUNSHENG";
        number.innerHTML = "#7C191E";
        break;
      case "button5":
        colorname.innerHTML = "桃夭";
        ct1.innerHTML = "TAOYAO";
        number.innerHTML = "#F6BEC8";
        break;
      case "button6":
        colorname.innerHTML = "杨妃";
        ct1.innerHTML = "YANGFEI";
        number.innerHTML = "#F091A0";
        break;
      case "button7":
        colorname.innerHTML = "长春";
        ct1.innerHTML = "CHANGCHUN";
        number.innerHTML = "#DC6B82";
        break;
      case "button8":
        colorname.innerHTML = "牙绯";
        ct1.innerHTML = "YAFEI";
        number.innerHTML = "#C35C5D";
        break;
      case "button9":
        colorname.innerHTML = "黄栗留";
        ct1.innerHTML = "HUANGLILIU";
        number.innerHTML = "#FEDC5E";
        break;
      case "button10":
        colorname.innerHTML = "栀子";
        ct1.innerHTML = "ZHIZI";
        number.innerHTML = "#F9C03C";
        break;
      case "button11":
        colorname.innerHTML = "黄不老";
        ct1.innerHTML = "HUANGBULAO";
        number.innerHTML = "#DB9B33";
        break;
      case "button12":
        colorname.innerHTML = "柘黄";
        ct1.innerHTML = "TUOHUANG";
        number.innerHTML = "#C67914";
        break;
      case "button13":
        colorname.innerHTML = "青鸾";
        ct1.innerHTML = "QINGLUAN";
        number.innerHTML = "#9AA6B0";
        break;
      case "button14":
        colorname.innerHTML = "菘蓝";
        ct1.innerHTML = "SONGLAN";
        number.innerHTML = "#6A798E";
        break;
      case "button15":
        colorname.innerHTML = "青黛";
        ct1.innerHTML = "QINGDAI";
        number.innerHTML = "#44465E";
        break;
      case "button16":
        colorname.innerHTML = "绀蝶";
        ct1.innerHTML = "GANDIE";
        number.innerHTML = "#2A2F3B";
        break;
        
    
    }
  }
  