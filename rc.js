let btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",function()
{
    let h=document.querySelector("h2");
    let rc=randomColor();
    console.log(rc);
    h.innerText=rc;
    let div=document.querySelector(".con div");
    div.style.backgroundColor=rc;
    console.log("updated")

})
function randomColor()
{
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let color =`rgb(${r},${g},${b})`
    return color;
}

