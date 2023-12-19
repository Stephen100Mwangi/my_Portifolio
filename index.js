
let textTrack = document.querySelector(".textTrack");


const navEl = document.querySelector(".header");
const bottomEl = document.querySelector("#home");

let projectCard = document.querySelectorAll(".card");

let latestProjects = document.getElementById("latestProjects");

let hiddenData = document.querySelector(".hiddenMe");

let moreButton = document.querySelector("#moreButton");

moreButton.addEventListener("click",()=>{
    hiddenData.style.visibility="visible";

});




window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomEl.offsetTop - navEl.offsetHeight-50)
    {
        navEl.classList.add("active");
       

    }
    else{
        navEl.classList.remove("active");
        
       
    }
});
latestProjects.addEventListener("mouseenter",()=>{
    projectCard.forEach(element => {
        element.style.visibility = "visible";
    });
    // alert("Hello");
})
latestProjects.addEventListener("mouseleave",()=>{
    // projectCard.forEach(element => {
    //     element.style.visibility = "hidden";
    // });
    // alert("Hello");
})

   
 

function changeName() {
    let names = ["UI/UX Designer","Front-end Developer","Android Developer"];
    let int = Math.floor(Math.random()*3);
    let target = names[int];

    textTrack.innerHTML= target;
    return(names[int]);
}

setInterval(() => {
    changeName();
}, 2000);

