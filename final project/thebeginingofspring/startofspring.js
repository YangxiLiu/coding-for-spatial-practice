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
  document.body.style.backgroundColor = "#fff798";
  
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "#ffed6f";
});

button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "#ecd452";
});

button4.addEventListener("click", function() {
  document.body.style.backgroundColor = "#b7a014";
});

button5.addEventListener("click", function() {
    document.body.style.backgroundColor = "#d5ebe1";
});
  
button6.addEventListener("click", function() {
    document.body.style.backgroundColor = "#b1d5c7";
});
  
button7.addEventListener("click", function() {
    document.body.style.backgroundColor = "#98bcac";
});
  
button8.addEventListener("click", function() {
    document.body.style.backgroundColor = "#80a492";
});

button9.addEventListener("click", function() {
    document.body.style.backgroundColor = "#8a7043";
});
  
button10.addEventListener("click", function() {
    document.body.style.backgroundColor = "#78513a";
});
  
button11.addEventListener("click", function() {
    document.body.style.backgroundColor = "#5f4323";
});
  
button12.addEventListener("click", function() {
    document.body.style.backgroundColor = "#422517";
});
  
button13.addEventListener("click", function() {
      document.body.style.backgroundColor = "#f4a694";
});
    
button14.addEventListener("click", function() {
      document.body.style.backgroundColor = "#ee7959";
});
    
button15.addEventListener("click", function() {
      document.body.style.backgroundColor = "#b95141";
});
    
button16.addEventListener("click", function() {
      document.body.style.backgroundColor = "#c1291f";
});

function changeText(buttonId) {
    var colorname = document.getElementById("colorname");
    var ct1 = document.getElementById("colortext1");
    var number = document.getElementById("number");
  
    switch (buttonId) {
      case "button1":
        colorname.innerHTML = "黄白游";
        ct1.innerHTML = "HUANGBAIYOU";
        number.innerHTML = "#FFF798";
        break;
      case "button2":
        colorname.innerHTML = "松花";
        ct1.innerHTML = "SONGHUA";
        number.innerHTML = "#FFED6F";
        break;
      case "button3":
        colorname.innerHTML = "缃叶";
        ct1.innerHTML = "XIANGYE";
        number.innerHTML = "#ECD452";
        break;
      case "button4":
        colorname.innerHTML = "苍黄";
        ct1.innerHTML = "CANGHUANG";
        number.innerHTML = "#B7A014";
        break;
      case "button5":
        colorname.innerHTML = "天缥";
        ct1.innerHTML = "TIANPIAO";
        number.innerHTML = "#D5EBE1";
        break;
      case "button6":
        colorname.innerHTML = "沧浪";
        ct1.innerHTML = "CANGLANG";
        number.innerHTML = "#B1D5C7";
        break;
      case "button7":
        colorname.innerHTML = "苍筤";
        ct1.innerHTML = "CANGLANG";
        number.innerHTML = "#98BCAC";
        break;
      case "button8":
        colorname.innerHTML = "缥碧";
        ct1.innerHTML = "PIAOBI";
        number.innerHTML = "#80A492";
        break;
      case "button9":
        colorname.innerHTML = "流黄";
        ct1.innerHTML = "LIUHUANG";
        number.innerHTML = "#8A7043";
        break;
      case "button10":
        colorname.innerHTML = "栗壳";
        ct1.innerHTML = "LIKE";
        number.innerHTML = "#78513A";
        break;
      case "button11":
        colorname.innerHTML = "龙战";
        ct1.innerHTML = "LONGZHAN";
        number.innerHTML = "#5F4323";
        break;
      case "button12":
        colorname.innerHTML = "青骊";
        ct1.innerHTML = "QINGLI";
        number.innerHTML = "#422517";
        break;
      case "button13":
        colorname.innerHTML = "海天霞";
        ct1.innerHTML = "HAITIANXIA";
        number.innerHTML = "#F4A694";
        break;
      case "button14":
        colorname.innerHTML = "缙云";
        ct1.innerHTML = "JINYUN";
        number.innerHTML = "#EE7959";
        break;
      case "button15":
        colorname.innerHTML = "纁黄";
        ct1.innerHTML = "XUNHUANG";
        number.innerHTML = "#B95141";
        break;
      case "button16":
        colorname.innerHTML = "珊瑚赫";
        ct1.innerHTML = "SHANHUHE";
        number.innerHTML = "#C1291F";
        break;
        
    
    }
  }
  