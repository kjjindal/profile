

var burger=document.querySelector('.burger')
var navbar1=document.querySelector('.nav2')
var navbar=document.querySelector('.nav')


burger.addEventListener('click',()=>{
     navbar1.classList.toggle('t_resp');
    navbar.classList.toggle('h_nav');
})
