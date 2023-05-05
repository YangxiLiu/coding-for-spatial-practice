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
  document.body.style.backgroundColor = "#eaede7";
  
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "#eaecde";
});

button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "#e0dfcf";
});

button4.addEventListener("click", function() {
  document.body.style.backgroundColor = "#c6c5b5";
});

button5.addEventListener("click", function() {
    document.body.style.backgroundColor = "#d2af9d";
});
  
button6.addEventListener("click", function() {
    document.body.style.backgroundColor = "#bd836c";
});
  
button7.addEventListener("click", function() {
    document.body.style.backgroundColor = "#b36d5d";
});
  
button8.addEventListener("click", function() {
    document.body.style.backgroundColor = "#996655";
});

button9.addEventListener("click", function() {
    document.body.style.backgroundColor = "#ea5413";
});
  
button10.addEventListener("click", function() {
    document.body.style.backgroundColor = "#d23918";
});
  
button11.addEventListener("click", function() {
    document.body.style.backgroundColor = "#c9151e";
});
  
button12.addEventListener("click", function() {
    document.body.style.backgroundColor = "#a72126";
});
  
button13.addEventListener("click", function() {
      document.body.style.backgroundColor = "#2c71ad";
});
    
button14.addEventListener("click", function() {
      document.body.style.backgroundColor = "#007176";
});
    
button15.addEventListener("click", function() {
      document.body.style.backgroundColor = "#284852";
});
    
button16.addEventListener("click", function() {
      document.body.style.backgroundColor = "#0f274f";
});

function changeText(buttonId) {
    var colorname = document.getElementById("colorname");
    var ct1 = document.getElementById("colortext1");
    var number = document.getElementById("number");
  
    switch (buttonId) {
      case "button1":
        colorname.innerHTML = "皦玉";
        ct1.innerHTML = "JIAOYU";
        number.innerHTML = "#EAEDE7";
        break;
      case "button2":
        colorname.innerHTML = "吉量";
        ct1.innerHTML = "JILIANG";
        number.innerHTML = "#EAECDE";
        break;
      case "button3":
        colorname.innerHTML = "韶粉";
        ct1.innerHTML = "SHAOFEN";
        number.innerHTML = "#E0DFCF";
        break;
      case "button4":
        colorname.innerHTML = "霜地";
        ct1.innerHTML = "CSHUANGDI";
        number.innerHTML = "#C6C5B5";
        break;
      case "button5":
        colorname.innerHTML = "夏籥";
        ct1.innerHTML = "XIAYUE";
        number.innerHTML = "#D2Af9D";
        break;
      case "button6":
        colorname.innerHTML = "紫磨金";
        ct1.innerHTML = "ZIMOJIN";
        number.innerHTML = "#BD836C";
        break;
      case "button7":
        colorname.innerHTML = "檀色";
        ct1.innerHTML = "TANSE";
        number.innerHTML = "#B36D5D";
        break;
      case "button8":
        colorname.innerHTML = "赭罗";
        ct1.innerHTML = "ZHELUO";
        number.innerHTML = "#996655";
        break;
      case "button9":
        colorname.innerHTML = "黄丹";
        ct1.innerHTML = "HUANGDAN";
        number.innerHTML = "#EA5413";
        break;
      case "button10":
        colorname.innerHTML = "洛神珠";
        ct1.innerHTML = "LUOSHENZHU";
        number.innerHTML = "#D23918";
        break;
      case "button11":
        colorname.innerHTML = "丹雘";
        ct1.innerHTML = "DANHUO";
        number.innerHTML = "#C9151E";
        break;
      case "button12":
        colorname.innerHTML = "水华朱";
        ct1.innerHTML = "SHUIHUAZHU";
        number.innerHTML = "#A72126";
        break;
      case "button13":
        colorname.innerHTML = "青冥";
        ct1.innerHTML = "QINGMING";
        number.innerHTML = "#2C71AD";
        break;
      case "button14":
        colorname.innerHTML = "青雘";
        ct1.innerHTML = "JINYUN";
        number.innerHTML = "#007176";
        break;
      case "button15":
        colorname.innerHTML = "青緺";
        ct1.innerHTML = "QINGGUO";
        number.innerHTML = "#284852";
        break;
      case "button16":
        colorname.innerHTML = "骐驎";
        ct1.innerHTML = "QILIN";
        number.innerHTML = "#0f274F";
        break;
        
    
    }
  }