$(document).ready(() => {
    $("#index .banner").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $("#index .comment .regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".partner .regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    scroolDown();
})

function scroolDown() {
    $(window).scroll(function() {
        $(".visible-bottom-to-top").each(function() {
            let pos = $(this).offset().top;
            let winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide-bottom-to-top");
            }
        });
        $(".visible-top-to-bottom").each(function() {
            let pos = $(this).offset().top;
            let winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide-top-to-bottom");
            }
        });
        $(".visible-left-to-right").each(function() {
            let pos = $(this).offset().top;
            let winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide-left-to-right");
            }
        });
        $(".visible-right-to-left").each(function() {
            let pos = $(this).offset().top;
            let winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide-right-to-left");
            }
        });
    });
}

// Gallery Slideshow
let thumbnail = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('thumbnail active');
let counter = 0;
for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('click', function() {
        activeImages.length > 0 ? activeImages[0].classList.remove('active') : '';
        this.classList.add('active');
        document.getElementById('featured').src = this.src;
        counter = i;
    })
}
if (thumbnail.length > 0) {
    setInterval(function changeThumbnail() {
        if (counter === thumbnail.length) {
            counter = 0;
            document.getElementById('slider').scrollLeft = 0;
        }
        activeImages.length > 0 ? activeImages[0].classList.remove('active') : '';
        thumbnail[counter].classList.add('active');
        document.getElementById('featured').src = thumbnail[counter].src;
        if (activeImages[0].previousSibling.previousSibling) {
            document.getElementById('slider').scrollLeft += activeImages[0].previousSibling.previousSibling.clientWidth;
        }
        counter++;
    }, 4000);
}

function toLeft() {
    document.getElementById('slider').scrollLeft -= 100;
}

function toRight() {
    document.getElementById('slider').scrollLeft += 100;
}

// Back to top
$('#back-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
})