// window.addEventListener("load", function () {
//     const loader = document.querySelector(".cover");
//     loader.className += " hidden"; // class "loader hidden"
//     document.body.style.overflow = "hidden";
// });
function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener("load", function() { changeBackground('white') });

$(document).ready(() => {
    getUrl();
});

function getUrl() {
    var url = window.location.href;
    var str = url.split('%');
    var name = str.pop();
    $('#name').html(name);

}
$(document).ready(function() {
    $(".preloader").fadeOut();
})

$(window).on('load', function() {


    // audio


    //scrollIt
    $.scrollIt({
        topOffset: 0
    });


})

$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $(".header").addClass("fixed");
        $(".fa-play").addClass("fixed");
        $(".backtop").addClass("fixed")
        //$("#myAudio")[0].play();
    } else {
        $(".header").removeClass("fixed");
        $(".fa-play").removeClass("fixed");
        $(".backtop").removeClass("fixed")
            // $("#myAudio")[0].pause();
    }
})

// $(".cover .open").click(function(){
//     document.body.style.overflow = "visible";
// })



var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 5,
    focus: 'center',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// $(window).on('load', function() {

//     //document.body.style.overflow = "visible";

//     $("#myAudio")[0].play();
// })

// audio

$(".fa-play").click(function() {

    if ($(this).hasClass("play")) {
	$("#myAudio")[0].pause();
        console.log("pause");
    } else {
        $("#myAudio")[0].play();
        console.log("play");
    }
    $(this).toggleClass("play");
})
let btn = document.querySelector(".toogle");
let icon = btn.querySelector(".fa-play");

btn.onclick = function() {
    if (icon.classList.contains("fa-pause")) {
        icon.classList.replace("fa-pause", "fa-play");
    } else {
        icon.classList.replace("fa-play", "fa-pause");
    }
}

let btnHPVBank = document.querySelector("#bankHPV");
btnHPVBank.onclick = function() {
    alert("19032866718016 \n Phan Van Hiep Techcombank!!");
}

let btnBLBank = document.querySelector("#bankBL");
btnBLBank.onclick = function() {
    alert("06984267101 \n Le Thi Bich TPbank!!");
}