let section1cl4=document.querySelectorAll('.section1coll-4')[0];
let mediumDiv=document.createElement('div');
mediumDiv.className='medium-logo';
section1cl4.appendChild(mediumDiv);
let imgs=['img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg']
for(i=0;i<imgs.length;i++){
let section1c4Div=document.createElement('div');
section1c4Div.className='allup-logo';
let section1c4DivImg=document.createElement('img');
section1c4DivImg.setAttribute('src',imgs[i]);
section1c4Div.appendChild(section1c4DivImg);
mediumDiv.appendChild(section1c4Div);
section1c4Div.style.height=400+'px';}
let aboutbtnLeft=document.querySelectorAll('.about-btn')[0]
aboutbtnLeft.addEventListener('click',Run1)
a=-3;
b=-384;
let allup_logo=document.querySelector('.medium-logo');
function Run1(){
    if(a<-3){
    a=a-b;
    allup_logo.style.left=a+'px';}
    else{
        a=a+(b*3)
    }
    allup_logo.style.left=a+'px';
}
let aboutbtnRight=document.querySelectorAll('.about-btn')[1];
console.log(aboutbtnRight)
setInterval(Run2,6000)
a=-3;
b=-384;
function Run2(){
    if(a>= -771){
    a=a+b;
    allup_logo.style.left=a+'px';
}else{
    a=a-(b*3);
}
    allup_logo.style.left=a+'px';
}
aboutbtnRight.addEventListener('click',Run2)
