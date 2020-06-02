// Vars Menu
const btnmenu = document.querySelector('.btnmenu-content');
const btnmenustyle = document.querySelector('.btnmenu-content .btnmenu');
const bars = document.querySelector('.btnmenu .fa-bars');
const header = document.querySelector('#header');
const menu = document.querySelector('.list-container');
const searchicon = document.querySelector('.searchmenu');
const shopcart = document.querySelector('.shopping-cart');
let on_off = true;

// Var Go Top 
const gotop = document.querySelector('.go-top');

// Click Menu
btnmenu.addEventListener('click', () => {
   bars.classList.toggle('fa-times');

   if (on_off) {
    menu.style.top = "60px";
    menu.style.transition = "1s";
    on_off = false;
   }else{ 
     on_off = false;
     menu.style.top = "-1000%";
     menu.style.transition = "1s";
     on_off = true;
   }
});

// Scroll Efect
window.onscroll = () =>{
    let scrollY = window.pageYOffset;
    
    // Menu
    if(scrollY >= 100){
     header.classList.add('nav-box-shadow');
     header.style.background = "#fff";
     btnmenustyle.style.color = "#0f0f11";
     searchicon.style.color = "#0f0f11";
     shopcart.style.color = "#0f0f11";

    }else{
     header.classList.remove('nav-box-shadow');  
     header.style.background = "none";
     btnmenustyle.style.color = "#fff";
     searchicon.style.color = "#fff";
     shopcart.style.color = "#fff";
    }
   
    // Go Top
    if(scrollY >= 200){
      gotop.style.right = "0%";
      gotop.style.transition = "300ms";
    }else{
      gotop.style.right = "-100%";
      gotop.style.transition = "300ms";
    }
    
}



