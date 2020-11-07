var navSlide = ()=>{ //Ma var stock la valeur d'une fonction anonyme
    var burger = document.querySelector(".burger"); 
    //Je cible mon tout premier élément CSS .burger
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li") 
    //Je veux cibler tout mes liens de la navbar

    //Toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

