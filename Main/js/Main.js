// 메인바 클릭 함수
document.querySelector(".midbar").addEventListener('click', (e) => {

    if (!e.target.classList.contains("midMenu")) return;

    var target = e.target;
    var parent = e.target.parentElement;

    //클릭시 해당 메뉴 백그라운드 컬로 변경하는 함수.
    var childElements = parent.getElementsByClassName('midMenu');

    Array.from(childElements).forEach(function (element) {
        if (target.className === element.className) {
            element.style.backgroundColor = "#f2fd48"
            element.style.color = "rgba(0, 0, 0)"
        } else {
            element.style.backgroundColor = ""
            element.style.color = "rgba(56, 56, 56, 0.507)"
        }
    });

    //클릭시 해당 메뉴 그림자 변경되는 함수.
    var shadowElements = e.target.parentElement.parentElement.previousElementSibling;
    var shadow1Elements = shadowElements.firstElementChild.getElementsByClassName('midMenuShadow');

    setTimeout(() => {
        Array.from(shadow1Elements).forEach(function (element) {
            if (target.classList[1] === element.classList[1]) {
                document.getElementById(element.classList[1]).style.backgroundColor = "rgb(230, 230, 230)"
            } else {
                element.style.backgroundColor = ""
            }
        });
    }, 70);


})

// 클릭시 메뉴 이름에 맞는 이미지 바꾸는 함수.
document.querySelector(".midbar").addEventListener('click', (e) => {

    if (!e.target.classList.contains("midMenu")) return;

    var target = e.target;
    var midbox = document.getElementsByClassName("midbox");

    for (var i = 0; i < midbox.length; i++) {
        // console.log(midbox[i].parentElement.classList[1]);
        // console.log(target.classList[1]);

        if (midbox[i].parentElement.classList[1] === target.classList[1]) {
            // console.log("이걸보세요" , midbox[i].parentElement.classList[1]);
            document.getElementsByClassName(midbox[i].parentElement.className)[0].style.display = "block"
        } else if (target.classList[1] == "all") {
            // console.log("ALLFORONE!");
            document.getElementsByClassName(midbox[i].parentElement.className)[0].style.display = "block"
        } else {
            // console.log("123");
            document.getElementsByClassName(midbox[i].parentElement.className)[0].style.display = "none"
        }
    }
})

// 이미지 클릭시 폼양식 생성 함수
document.querySelector(".midSelect").addEventListener('click', (e) => {

    if (!e.target.classList.contains("IMG")) return;

    var target = e.target;
    var IMG = document.querySelectorAll(".IMG");
    var FormBOX1 = document.querySelector(".FormBOX1");

    if (!target.classList.contains("active")) {
        FormBOX1.classList.add("active");
        target.classList.toggle("active")
    } else {
        FormBOX1.classList.remove("active");
        target.classList.toggle("active")
    }

    IMG.forEach(tag => {
        if (tag != target) {
            tag.classList.remove('active');
        }
    });

});

// css 미디어쿼리 ( 반응형 웹 사이트 )
