let subMenuPortfolio=document.querySelector(".sub-menuPortfolio")
let li2=document.querySelectorAll('.li')[2]
li2.addEventListener('mouseover',function(){
    subMenuPortfolio.style.display="block"
})
li2.addEventListener('mouseout',function(){
    subMenuPortfolio.style.display="none"})


let largeblockSticky=document.querySelector('.largeblock-section3')
let logoSticky=document.querySelectorAll("img")[0]
let submenuPortfolio=document.querySelector(".sub-menuPortfolio")
let portfolioMenu=document.querySelector(".menu-section3")
console.log(portfolioMenu)
window.addEventListener('scroll',function(){
    if(window.scrollY>300){
    largeblockSticky.style.position='fixed'
    largeblockSticky.style.maxHeight=75+'px';
    logoSticky.style.maxHeight=75+'px'
    subMenuPortfolio.style.top=67+'px'
    largeblockSticky.style.background='white'
    }
    else{
        largeblockSticky.style.position='absolute'
        largeblockSticky.style.maxHeight=130+'px';
        logoSticky.style.maxHeight=120+'px'
        subMenuPortfolio.style.top=93+'px'
        largeblockSticky.style.background='white'
        portfolioMenu.style.marginTop=17+'px'
       
    }
})
