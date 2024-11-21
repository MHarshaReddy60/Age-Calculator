const parent = document.querySelector(".parent");
const dob = document.getElementById("inputt");
const submitbutton = document.getElementById("submit");
const head = document.createElement("h1");

submitbutton.addEventListener("click",( )=>{
    const dobvalue=dob.value;
    const dobdate=new Date(dobvalue);
    const presentdate = new Date();

    const diff_in_seconds = presentdate-dobdate;
    const diff_in_yr = Math.floor(diff_in_seconds/(1000*60*60*24*365.25));
    
    head.innerHTML = `Your Age is :<span> ${diff_in_yr} Years<span>`
})

parent.appendChild(head)