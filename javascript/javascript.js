
// Nav start 
var respNav = document.getElementById("resp-nav");
var navigation = document.getElementById("navigation");
var croseBtn = document.getElementById("crosebtn");
respNav.addEventListener("click",()=>{
  navigation.style.display = "flex";
})
croseBtn.addEventListener("click",()=>{
    navigation.style.display = "none";
})
// nav end 

// For activities page section 
var activitiesNames = ['Craft making competition','Diya making competition','Kite making competition','Basant Panchami','Watch making competion','Holi celebration','Indivisual speech'];
var activitiesPhotos = ['craftmaking.jpeg','diyamaking.jpeg','kitemaking.jpeg','BasantPanchami.jpeg','watchmaking.jpeg','Holi.jpeg','Indivisual.jpeg'];
var num = 0;
var url = "url(Images/";
var num1 = 0;
var activitiesName = document.getElementById("activitiesName");
var activities = document.getElementById("activities");
activitiesName.innerText = activitiesNames[0];
activities.style.backgroundImage = url + activitiesPhotos[0] + ")";
var btn2 = document.getElementById("btn2").addEventListener("click",()=>{
  num++;
  num1++;
  if(num == activitiesNames.length){
     num = 0;
  }
  if(num1 == activitiesPhotos.length){
    num1 = 0;
 }
  activitiesName.innerText = activitiesNames[num];
  activities.style.backgroundImage = url + activitiesPhotos[num1] + ")";
})


var btn1 = document.getElementById("btn1").addEventListener("click",()=>{
  num--;
  num1--;
  if(num == -1){
     num = 6;
  }
  if(num1 == -1){
    num1 = 6;
 }
  activitiesName.innerText = activitiesNames[num];
  activities.style.backgroundImage = url + activitiesPhotos[num1] + ")";
})
// activites section end 