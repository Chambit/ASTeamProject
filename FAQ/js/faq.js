var midbox1 = document.querySelector(".midbox1");

midbox1.onclick = function (e) {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.target.className == "midbox1") return;

    // if (event.target.className != "midbox2"  ) {
        // event.target.classList.toggle("cl2");
    // } else {
    
    var target = e.target
    

    while( !target.classList.contains("midbox2") ) {
        target = target.parentElement
    }

    if (target.classList.contains("cl1")) {
        target.classList.add("cl2")
        target.classList.remove("cl1")
    } else {
        target.classList.remove("cl2")
        target.classList.add("cl1")
    }
}