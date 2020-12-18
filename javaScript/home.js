let upLogoHeader=document.querySelector('.up-logo-header')
let li0=document.querySelectorAll('.li')[0]
k=70;
let headInterval=setInterval(Go,200)
function Go(){
    for(i=0;i<100;i++){
    if(k<=70){
    k=k+88
    upLogoHeader.style.left=k+'px';} 
}
}
li0.addEventListener('click',Go)


let letter=document.querySelector('.letter')
letter.style.display='none'
setInterval(Appear,800)
function Appear(){
    letter.style.display='block';
}


let upHand=document.querySelectorAll('img','src')[1]
let upInterval=setInterval(function(){
    upHand.style.top=560+'px'
},600)
li0.addEventListener('click',function(){
    upHand.style.top=560+'px'
})
let subMenuHead=document.querySelector(".sub-menuHead")
console.log(subMenuHead)
let li2=document.querySelectorAll('.li')[2]
console.log(li2)
li2.addEventListener('mouseover',function(){
    subMenuHead.style.display="block"
})
li2.addEventListener('mouseout',function(){
    subMenuHead.style.display="none"})
