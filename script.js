let container=document.getElementById("mainContainer");
let colorButton=document.getElementById("colorButton");
let addchildButton=document.getElementById("addchildButton");
let removechildbutton=document.getElementById("removechildbutton");
colorButton.addEventListener("click",()=>{
    container.style.backgroundColor="yellow";
})
addchildButton.addEventListener("click",()=>{
    let element=document.createElement("div");
    element.classList.add("child");
    container.appendChild(element);
})
removechildbutton.addEventListener("click",()=>{
    container.removeChild(container.lastElementChild)
})