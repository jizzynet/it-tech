const menu = document.querySelector(".menu_bar");
const mobile = document.querySelector(".mobile-nav");
menu.addEventListener("click", function(){
    menu.classList.toggle("is-active");
    mobile.classList.toggle("is-active");
    });
    mobile.addEventListener('click',  (event)=>{
        if(event.target.closest('a')){
            menuButton.classList.remove('is-active');
        }
    });
    