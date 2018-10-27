var farmButton = Document.getElementByClass("farm-button");
// <button>Farms At NYCHA</button>
// button1.addEventListener("click",function(){  window.location='http://www.example.com';}
//^^ Does the function of changes to the next slide
$('farm-button').click(function(){
  window.location.href='views/farm-info';
})
// button needs to be a picture of the farm..

// button1.setAttribute("src", "http://www.greencityforce.org/wp-content/uploads/2016/10/wagner_farm-300x200.jpg")


// button1.style.width = "half of max px";
// button1.style.height = "half of max px"

// button should transfer you to the Farm Specific page which then has
// three buttons 

var loveButton = document.querySelector(".love-button");
// button2.addEventListener("click",function(){}
//^^ Does the function of changes to the next slide

loveButton.click(function(){
   window.location.href='website address';
})