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
setInterval(Run2,3500)
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
let upLogoHeader=document.querySelector('.up-logo-header')
let overLayHead=document.querySelector('.over-lay-header')
k=70;
setInterval(Go,200)
function Go(){
    if(k<=70){
    k=k+88
    upLogoHeader.style.left=k+'px';
}
}
let allP=document.querySelectorAll('.all-p')[0]
setInterval(Begin1,200)
z1=300;
function Begin1(){
    if(z1>0){
    z1=z1-300
    allP.style.top=z1+'px'}
}
let allp=document.querySelectorAll('.all-p')[1]
setInterval(Begin2,200)
z2=300;
function Begin2(){
    if(z2>0){
    z2=z2-300
    allp.style.top=z2+'px'}
}