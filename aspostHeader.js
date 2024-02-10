/* ==========좌측사이드========== */

var menuBtn = document.querySelectorAll(".togle");

menuBtn.addEventListener("click", function() {

    
    for(var i = 0; i < menuBtn.length; i++){
        if(menuBtn[i].classList.contains("active")){
            menuBtn.classList.toggle("active");
        } else {
            menuBtn.classList.toggle("active");
        }
    }


    console.log(1);

})
