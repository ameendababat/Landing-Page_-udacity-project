
//  ameen ahmad dababat
 document.addEventListener("DOMContentLoaded",() =>{

    //select all sections
var SectionsAll = document.querySelectorAll("section"); 

var listSection =document.getElementById("navbar__list");

function createnavbar(){

const sectionList = ["ptuk","QOU","Najah","Birzeit"];
// create nave bar menue From Itself Work


for (let i = 0; i < SectionsAll.length; i++) {
    const item =document.createElement("li");
    const ancher =document.createElement("a");
    ancher.classList.add("menu__link");
    ancher.href =`#${SectionsAll[i].getAttribute("id")}`;
    ancher.innerHTML =sectionList[i];
    item.appendChild(ancher);
    listSection.appendChild(item);
    
}
}

createnavbar();

// Select all list items in the navbar
const navv = document.querySelectorAll("#navbar__list li");
const anc = document.querySelectorAll("#navbar__list li a");



//// Scrolling
window.onscroll = function(){
    WhenScrrol();
};



// Function to highlight the section in view
 function WhenScrrol(){

    SectionsAll.forEach((evt) => {
        if(evt.getBoundingClientRect().top>=-30 &&
         evt.getBoundingClientRect().top<=150)

         {
         evt.classList.add("active-class");
        }
        else{
            evt.classList.remove("active-class");
        }
    });
 }
//  Add event listeners to each navbar item
 navv.forEach((evt) =>{
    navv.forEach((par)=>par.classList.remove("active"));
    evt.addEventListener("click",function(){
        navv.forEach((par)=>par.classList.remove("active"));
        evt.classList.add("active");
    });
 });
// Add smooth scrolling behavior to each anchor tag
  anc.forEach((evt) => { 

    evt.addEventListener("click",function(event){
    //  event.preventDefault();
     const secID = evt.getAttribute("href");
     document.getElementById(secID).scrollIntoView({behavior:'smooth'});

    });
  });


// active element
for(var i =0;i<navv.length;i++){
    navv[i].addEventListener("click",function(){
        let current = document.getElementsByClassName("active");
        if(current.length>0){
            current[0].className =current[0].className.replace(" active","");
    
        }
        this.className += " active";
    });
    }

  
  
  // Create a scroll-to-top button
  const ToTopButton = document.createElement("button");// Create the button 
  ToTopButton.textContent ="↑↑ TOP";
  ToTopButton.classList.add("scroll-to-top");
 document.querySelector(".page__footer").appendChild(ToTopButton);


window.addEventListener("scroll", () =>{
    if(window.scrollY > 500){
        ToTopButton.style.display = "block";//Show  button
        
    }
    else{
        ToTopButton.style.display ="none";//Hide  button
    }
});

ToTopButton.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});// scroll to  top of the page Smoothly
});


 




});









// const observingSection = () => {

// const options ={
//     root : null,
//     threshold : 0.7,


// };

// const callback =(entries) =>{
//     entries.forEach((element) => {
//         // console.log(element);
//         let activeLink = listSection.querySelector(`[data-nav-${element.target.id}]`);
        
//         if(element.isIntersecting){
//             // section is visible
//            element.target.classList.add("your-active-class");
//            activeLink.classList.add("active-link");
//            location.hash = `${element.target.id}`;
//         }
//         else{
//             // section is not visible
//             element.target.classList.remove("your-active-class");
//             activeLink.classList.remove("active-link");

//         }
        
//     });
// };
// const observer = new IntersectionObserver(callback,options);

// return document.querySelectorAll("section").forEach((section) =>{
//     observer.observe(section);
// });

// };


















