const button = document.querySelector(".login-button");

const loader = document.querySelector(".loader");

const arrow = document.querySelector(".arrow");

button.addEventListener("click", ()=>{

    button.disabled = true;

    const clickSound = new Audio("sonidos/clickk.mp3");

    clickSound.play();

    arrow.style.display="none";

    loader.style.display="block";

    setTimeout(()=>{

        document.body.classList.add("fade-out");

    },1200);

    setTimeout(()=>{

        window.location.href="home.html";

    },2000);

});
