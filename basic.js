const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach(function(bubble){

    bubble.onclick = function(){

        const number = bubble.id.replace("bubble", "");

        const lesson = document.getElementById("lesson" + number);

        lesson.style.left = (bubble.offsetLeft - 70) + "px";
        lesson.style.top = (bubble.offsetTop - 40) + "px";

        bubble.classList.add("pop");

        setTimeout(function(){

            bubble.style.display = "none";

         lesson.style.display = "block";
         
         setTimeout(function(){
            lesson.classList.add("show");
        },20);

        },350);

    };

});