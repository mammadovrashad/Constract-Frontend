let subMenuPortfolio=document.querySelector(".sub-menuPortfolio")
console.log(subMenuPortfolio)
let li2=document.querySelectorAll('.li')[2]
console.log(li2)
li2.addEventListener('mouseover',function(){
    subMenuPortfolio.style.display="block"
})
li2.addEventListener('mouseout',function(){
    subMenuPortfolio.style.display="none"})
