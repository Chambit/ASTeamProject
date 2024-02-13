// 카드 추가하는 펑션
document.getElementById('btn').addEventListener('click', function() {
    var original = document.querySelector('.cardBox');
    var clone = original.cloneNode(true);
    var parent = document.querySelector('.AScard');
    parent.appendChild(clone);
});

// midbar 움직이는 펑션
// document.querySelector(".midToggle2").addEventListener('click', (e) => {
    
//     if (!e.target.classList.contains("midMenu")) return;
    
//     var target = e.target;
//     var parent = e.target.parentElement;
    
    
    
//     console.log(target, "이것은 타겟");
//     console.log(target.className, "이것은 이름")
//     console.log(parent);
    
    
//     var shadowParent = document.querySelector(".midToggle2Shadow");
//     var shadowTarget = shadowParent.getElementsByClassName("midMenuShadow")
    
//     console.dir(shadowTarget);
//     console.log(shadowTarget[0].classList[1]);
    
//     for (var i = 0; i < shadowTarget.length; i++) {
//         console.log(shadowTarget[i].classList[1], "확인해");
//         if (shadowTarget[i].classList[1] === )
//     }
    
    
//     var childElements = parent.getElementsByClassName('midMenu');
//     Array.from(childElements).forEach(function(element) {
//         console.log(element.className);
//         console.log(target.className);
//         if (target.className === element.className) {
//             target.style.backgroundColor = "rgb(245, 241, 20)"
//         } else {
//             element.style.backgroundColor = ""
//         }
//     });

// })

// midbar 움직이는 펑션
document.querySelector(".midbar").addEventListener('click', (e) => {

    if (!e.target.classList.contains("midMenu")) return;
    
    var target = e.target;
    var parent = e.target.parentElement;

    // console.log(target, "이것은 타겟");
    // console.log(parent);
    
   
    var childElements = parent.getElementsByClassName('midMenu');
    var shadowElements = e.target.parentElement.parentElement.previousElementSibling;
    var shadow1Elements = shadowElements.firstElementChild.getElementsByClassName('midMenuShadow');
    

    var check = target.className.split(" ");
    
    Array.from(childElements).forEach(function(element) {
        if (target.className === element.className) {
            target.style.backgroundColor = "rgb(245, 241, 20)"
        } else {
            element.style.backgroundColor = ""
        }
    });

    Array.from(shadow1Elements).forEach(function(element) {
        var elementcheck = element.className.split(" ");
        //받아 올 태그 
        if (check[1]==elementcheck[1]) {
            document.getElementById(check[1]).style.backgroundColor = "rgb(223, 220, 220)"
        } else {
            element.style.backgroundColor = ""
        }
    });

    console.log(target.classList[1]);
    
    var midBox = document.querySelector(".midBox");
    console.log(midBox.classList);

    // 할 것. midBox 태그 가져와서 list 속성들 가져와서
    // 위에 선택한 메뉴바와 같은 클래스 명칭 제외 전부 디스플레이 논하고
    // 같은 것은 화면 띄우는 기능 만들기.

    // for (var i = 0; i < ; i++) {

    // }

})


// css 미디어쿼리 ( 반응형 웹 사이트 )

