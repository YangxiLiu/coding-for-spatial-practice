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
  document.body.style.backgroundColor = "#f9d3e3";
  
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "#ebb0c1";
});

button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "#dd7694";
});

button4.addEventListener("click", function() {
  document.body.style.backgroundColor = "#a76283";
});

button5.addEventListener("click", function() {
    document.body.style.backgroundColor = "#beb1aa";
});
  
button6.addEventListener("click", function() {
    document.body.style.backgroundColor = "#b39273";
});
  
button7.addEventListener("click", function() {
    document.body.style.backgroundColor = "#a35f44";
});
  
button8.addEventListener("click", function() {
    document.body.style.backgroundColor = "#6b5458";
});

button9.addEventListener("click", function() {
    document.body.style.backgroundColor = "#e4a74b";
});
  
button10.addEventListener("click", function() {
    document.body.style.backgroundColor = "#e18a3c";
});
  
button11.addEventListener("click", function() {
    document.body.style.backgroundColor = "#994f31";
});
  
button12.addEventListener("click", function() {
    document.body.style.backgroundColor = "#7c461e";
});
  
button13.addEventListener("click", function() {
      document.body.style.backgroundColor = "#c0d595";
});
    
button14.addEventListener("click", function() {
      document.body.style.backgroundColor = "#a9be7b";
});
    
button15.addEventListener("click", function() {
      document.body.style.backgroundColor = "#779649";
});
    
button16.addEventListener("click", function() {
      document.body.style.backgroundColor = "#4f6f46";
});

function changeText(buttonId) {
    var colorname = document.getElementById("colorname");
    var ct1 = document.getElementById("colortext1");
    var number = document.getElementById("number");
  
    switch (buttonId) {
      case "button1":
        colorname.innerHTML = "盈盈";
        ct1.innerHTML = "YINGYING";
        number.innerHTML = "#F9D3E3";
        break;
      case "button2":
        colorname.innerHTML = "水红";
        ct1.innerHTML = "SHUIHONG";
        number.innerHTML = "#EBB0C1";
        break;
      case "button3":
        colorname.innerHTML = "苏梅";
        ct1.innerHTML = "SUMEI";
        number.innerHTML = "#DD7694";
        break;
      case "button4":
        colorname.innerHTML = "紫茎";
        ct1.innerHTML = "ZIJINGPINGFENG";
        number.innerHTML = "#A76283";
        break;
      case "button5":
        colorname.innerHTML = "葭灰";
        ct1.innerHTML = "JIAHUI";
        number.innerHTML = "#BEB1AA";
        break;
      case "button6":
        colorname.innerHTML = "黄埃";
        ct1.innerHTML = "HUANGAI";
        number.innerHTML = "#B39273";
        break;
      case "button7":
        colorname.innerHTML = "老僧衣";
        ct1.innerHTML = "LAOSENGYI";
        number.innerHTML = "#A35F44";
        break;
      case "button8":
        colorname.innerHTML = "玄天";
        ct1.innerHTML = "XUANTIAN";
        number.innerHTML = "#6B5458";
        break;
      case "button9":
        colorname.innerHTML = "琉璃";
        ct1.innerHTML = "HUANGHELIULI";
        number.innerHTML = "#E4A74B";
        break;
      case "button10":
        colorname.innerHTML = "库金";
        ct1.innerHTML = "KUJIN";
        number.innerHTML = "#E18A3C";
        break;
      case "button11":
        colorname.innerHTML = "缊韨";
        ct1.innerHTML = "WENFU";
        number.innerHTML = "#994F31";
        break;
      case "button12":
        colorname.innerHTML = "紫瓯";
        ct1.innerHTML = "ZISE";
        number.innerHTML = "#7C461E";
        break;
      case "button13":
        colorname.innerHTML = "欧碧";
        ct1.innerHTML = "OUBI";
        number.innerHTML = "#C0D595";
        break;
      case "button14":
        colorname.innerHTML = "春辰";
        ct1.innerHTML = "CHUNCHEN";
        number.innerHTML = "#A9BE7B";
        break;
      case "button15":
        colorname.innerHTML = "碧山";
        ct1.innerHTML = "BISHAN";
        number.innerHTML = "#779649";
        break;
      case "button16":
        colorname.innerHTML = "青青";
        ct1.innerHTML = "QINGQING";
        number.innerHTML = "#4F6F46";
        break;
        
    
    }
  }
  