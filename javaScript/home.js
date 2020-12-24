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


// let upHand=document.querySelectorAll('img','src')[1]
// let upInterval=setInterval(function(){
//     upHand.style.top=560+'px'
// },600)
li0.addEventListener('click',function(){
    upHand.style.top=560+'px'
})
let serviceUl=document.querySelectorAll('ul')[1]
console.log(serviceUl)
let li2=document.querySelectorAll('.li')[2]
console.log(li2)
li2.addEventListener('mouseover',function(){
    serviceUl.style.display="block"
})
li2.addEventListener('mouseout',function(){
    serviceUl.style.display="none"})
    let largeblockStickyH=document.querySelector('.largeblock-header')
    let largeblockStickyColor=document.querySelectorAll('.largeblock-header ul li a')
    let largeblockStickySearch=document.querySelector('.search-icon-header')
    let largeblockStickyBag=document.querySelector('.bag-icon-header')
    let logoSticky=document.querySelectorAll("img")[0]
    let HeaderMenu=document.querySelector(".rightblock-header")
    let largeblockStickySingle=document.querySelectorAll('.largeblock-header ul li a')[3]
    window.addEventListener('scroll',function(){
        if(window.scrollY>270){
            console.log(window.scroll)
        largeblockStickyH.style.position='fixed'
        largeblockStickyH.style.maxHeight=75+'px';
        logoSticky.style.maxHeight=75+'px'
        largeblockStickyH.style.background='white'
        largeblockStickySearch.style.color='black'
        largeblockStickyBag.style.color='black'
        largeblockStickySingle.style.color="black"
        logoSticky.setAttribute('src','img/logo/2.logo.png')
        largeblockStickyColor.forEach(element => {
            element.style.color="black"
    }) 
     
        }
        else{
            largeblockStickyH.style.position='absolute'
            largeblockStickyH.style.maxHeight=130+'px';
            logoSticky.style.maxHeight=120+'px'
            serviceUl.style.top=59+'px'
            largeblockStickyH.style.background='none'
            HeaderMenu.style.marginTop=17+'px'
            largeblockStickySearch.style.color='white'
            largeblockStickyBag.style.color='white'
            logoSticky.setAttribute('src','img/logo/konstrakt-logo-inv.png')
            largeblockStickyColor.forEach(element => {
                element.style.color="white"})
                largeblockStickySingle.style.color="red"
            }
    })