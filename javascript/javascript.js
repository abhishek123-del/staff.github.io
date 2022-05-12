console.log("hello");

var respNav = document.getElementById("resp-nav");
var navigation = document.getElementById("navigation");
var croseBtn = document.getElementById("crosebtn");
respNav.addEventListener("click",()=>{
  navigation.style.display = "flex";
})
croseBtn.addEventListener("click",()=>{
    navigation.style.display = "none";
})
