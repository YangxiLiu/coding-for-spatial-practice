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
  document.body.style.backgroundColor = "#a5569d";
  
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "#8a1774";
});

button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "#6c216d";
});

button4.addEventListener("click", function() {
  document.body.style.backgroundColor = "#412256";
});

button5.addEventListener("click", function() {
    document.body.style.backgroundColor = "#bdc2b2";
});
  
button6.addEventListener("click", function() {
    document.body.style.backgroundColor = "#9c9d82";
});
  
button7.addEventListener("click", function() {
    document.body.style.backgroundColor = "#919177";
});
  
button8.addEventListener("click", function() {
    document.body.style.backgroundColor = "#79836d";
});

button9.addEventListener("click", function() {
    document.body.style.backgroundColor = "#d3ccd6";
});
  
button10.addEventListener("click", function() {
    document.body.style.backgroundColor = "#9c8eaa";
});
  
button11.addEventListener("click", function() {
    document.body.style.backgroundColor = "#7d537e";
});
  
button12.addEventListener("click", function() {
    document.body.style.backgroundColor = "#663d73";
});
  
button13.addEventListener("click", function() {
      document.body.style.backgroundColor = "#ca5c83";
});
    
button14.addEventListener("click", function() {
      document.body.style.backgroundColor = "#b83570";
});
    
button15.addEventListener("click", function() {
      document.body.style.backgroundColor = "#a63767";
});
    
button16.addEventListener("click", function() {
      document.body.style.backgroundColor = "#8f3655";
});

function changeText(buttonId) {
    var colorname = document.getElementById("colorname");
    var ct1 = document.getElementById("colortext1");
    var number = document.getElementById("number");
  
    switch (buttonId) {
      case "button1":
        colorname.innerHTML = "紫蒲";
        ct1.innerHTML = "ZIPU";
        number.innerHTML = "#A5569D";
        break;
      case "button2":
        colorname.innerHTML = "赪紫";
        ct1.innerHTML = "CHENZI";
        number.innerHTML = "#8A1774";
        break;
      case "button3":
        colorname.innerHTML = "齐紫";
        ct1.innerHTML = "QIZI";
        number.innerHTML = "#6C216D";
        break;
      case "button4":
        colorname.innerHTML = "凝夜紫";
        ct1.innerHTML = "NINGYEZI";
        number.innerHTML = "#412256";
        break;
      case "button5":
        colorname.innerHTML = "冻缥";
        ct1.innerHTML = "DONGPIAO";
        number.innerHTML = "#BDC2B2";
        break;
      case "button6":
        colorname.innerHTML = "春碧";
        ct1.innerHTML = "CHUNBI";
        number.innerHTML = "#9C9D82";
        break;
      case "button7":
        colorname.innerHTML = "执大象";
        ct1.innerHTML = "ZHIDAXIANG";
        number.innerHTML = "#919177";
        break;
      case "button8":
        colorname.innerHTML = "苔古";
        ct1.innerHTML = "TAIGU";
        number.innerHTML = "#79836D";
        break;
      case "button9":
        colorname.innerHTML = "紫烟";
        ct1.innerHTML = "XIANGLUZIYAN";
        number.innerHTML = "#D3CCD6";
        break;
      case "button10":
        colorname.innerHTML = "紫菂";
        ct1.innerHTML = "ZIDI";
        number.innerHTML = "#9C8EAA";
        break;
      case "button11":
        colorname.innerHTML = "拂紫绵";
        ct1.innerHTML = "FUZIMIAN";
        number.innerHTML = "#7D537E";
        break;
      case "button12":
        colorname.innerHTML = "三公子";
        ct1.innerHTML = "SANGONGZI";
        number.innerHTML = "#663D73";
        break;
      case "button13":
        colorname.innerHTML = "琅玕紫";
        ct1.innerHTML = "LANGGANZI";
        number.innerHTML = "#CA5C83";
        break;
      case "button14":
        colorname.innerHTML = "红踯躅";
        ct1.innerHTML = "HONGZHIZHU";
        number.innerHTML = "#B83570";
        break;
      case "button15":
        colorname.innerHTML = "魏红";
        ct1.innerHTML = "WEIHONG";
        number.innerHTML = "#A63767";
        break;
      case "button16":
        colorname.innerHTML = "魏紫";
        ct1.innerHTML = "WEIZI";
        number.innerHTML = "#8F3655";
        break;
        
    
    }
  }