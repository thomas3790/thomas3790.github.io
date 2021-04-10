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

const titleSpans = document.querySelectorAll('.citation span');
const btns = document.querySelectorAll('.cta');
const bulles = document.querySelectorAll('.bulle');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});
    // Pas obligé de mettre sur pause au départ mais c'eest une bonne pratique.

    TL
    .staggerFrom(titleSpans, 1, {top: -50, opacity: 0, ease:"power2.out"}, 0.3)
    // le stagger c'est le temps entre chaque animation.
    .staggerFrom(btns, 1, {opacity: 0, ease:"power1.out"}, 0.3, '-=1')
    .staggerFrom(bulles, 0.7, {right: -70, opacity: 0, ease:"power2.out"}, 0.3, '-=0.6');
    //On met le ; à la dernière animation. Pas de staggerFrom si pas besoin de définir "l'intermitence".

    TL.play();
})