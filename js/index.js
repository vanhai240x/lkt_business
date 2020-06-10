$(document).ready(() => {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

// Collapse
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
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

function showMoreProduct(e) {
    e.preventDefault();
    $('.index-page .product .container .wrapper-item .item').removeClass('hide');
    $('.index-page .product .container .wrapper-btn-border').remove();
    $('.index-page .product .container .wrapper-btn-border:first-child').remove();
}