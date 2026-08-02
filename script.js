/*=========================================
    PREMIUM SREEMANTHAM INVITATION
=========================================*/
// Wait for page to load
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

/*=========================================
    ELEMENTS
=========================================*/

const gate = document.getElementById("gate");
const website = document.getElementById("website");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

const envelope=document.querySelector(".envelope");

openBtn.onclick=()=>{

envelope.classList.add("open");

setTimeout(()=>{

gate.style.display="none";

website.classList.remove("hidden");

music.play();

heroAnimation();

},1200);

}

/*=========================================
            COUNTDOWN
=========================================*/

const targetDate = new Date("August 08, 2026 10:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60))
        / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".counter").innerHTML =
            "<h2>Welcome To The Celebration 🎉</h2>";

    }

}, 1000);

/*=========================================
            SWIPER
=========================================*/

new Swiper(".mySwiper", {

    slidesPerView: 1,

    spaceBetween: 25,

    loop: true,

    autoplay: {

        delay: 2500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        768: {

            slidesPerView: 2

        },

        1024: {

            slidesPerView: 3

        }

    }

});
/*=========================================
            GSAP
=========================================*/

function heroAnimation() {

    gsap.from(".hero-image", {

        scale: 0,

        duration: 1.2,

        ease: "back.out(1.7)"

    });

    gsap.from("#hero h1", {

        y: 60,

        opacity: 0,

        duration: 1,

        delay: .4

    });

    gsap.from("#hero h2", {

        y: 40,

        opacity: 0,

        stagger: .25,

        delay: .8

    });

    gsap.from(".hero-date", {

        scale: 0,

        duration: 1,

        delay: 1.2

    });

}

/*=========================================
            AOS
=========================================*/

AOS.init({

    duration: 1000,

    once: true,

    easing: "ease-in-out"

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

/*=========================================
        BACK TO TOP
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

/*==================================
      PREMIUM MUSIC PLAYER
===================================*/
//const music = document.getElementById("bgMusic");

const player =document.querySelector(".music-player");

const toggle =document.getElementById("musicToggle");

toggle.onclick=()=>{

if(music.paused){

music.play();

player.classList.add("playing");

toggle.innerHTML='<i class="fa-solid fa-pause"></i>';

}else{

music.pause();

player.classList.remove("playing");

toggle.innerHTML='<i class="fa-solid fa-play"></i>';

}

}/*==============================
        LIGHTBOX
==============================*/

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(image=>{

image.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=image.src;

}

});

closeLightbox.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}

/*==================================
        RSVP WHATSAPP
===================================*/

document
.getElementById("sendWhatsapp")
.addEventListener("click",()=>{

const name=
document.getElementById("guestName").value;

const phone=
document.getElementById("guestPhone").value;

const guests=
document.getElementById("guestCount").value;

const wishes=
document.getElementById("guestMessage").value;

const message=

`🌸 Sreemantham RSVP 🌸

Name : ${name}

Phone : ${phone}

Guests : ${guests}

Wishes :
${wishes}`;

const whatsappNumber=
"916281792199";   // <-- Replace with your number

window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

"_blank"

);

});


const petalContainer = document.body;

function createPetal(){

    const petal = document.createElement("img");

    petal.src="assets/images/petal.png";

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
        (8+Math.random()*5)+"s";

    petal.style.transform=
        `rotate(${Math.random()*360}deg)`;

    petalContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,1200);