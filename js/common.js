var options = {
    width: 600,
    zoomWidth: 400,
    offset: { vertical: 0, horizontal: 10 },
};
var cartCountValue = 0;
var cartCount = $('.header .cart .number');
$(document).ready(() => {
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
        ]
    });
    scroolDown();
    var mainImage = $('#main-image');
    if (mainImage.length > 0) {
        new ImageZoom(document.getElementById("main-image"), options);
    }
})

$('.addToCart').click(function() {
    cartCountValue++;
    $(cartCount).text(cartCountValue);
    $('.header .cart').addClass('shake');
    $(this).addClass('add');
    setTimeout(function() {
        $('.addToCart').removeClass('add');
        $('.header .cart').removeClass('shake');
    }, 1000)
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

function openMenu() {
    $('.header .menu').addClass('toggle');
}

function closeMenu() {
    $('.header .menu').removeClass('toggle');
}

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let height = 60;
    if (scroll >= height) {
        $(".header").addClass("mini");
    } else {
        $(".header").removeClass("mini");
    }
});

$('.btn-search').click(function(e) {
    e.preventDefault();
    console.log($('.input-search').val().length);
    if ($('.input-search').val().length === 0) {
        $('.input-search').toggleClass('toggle');
    } else {
        document.getElementById("formSearch").submit();
    }
})

function viewGrid() {
    $('#products .line-1 .wrapper-btn button').removeClass('active');
    $('.grid-view').addClass('active');
    $('#products .wrapper-item').removeClass('list');
}

function viewList() {
    $('#products .line-1 .wrapper-btn button').removeClass('active');
    $('.list-view').addClass('active');
    $('#products .wrapper-item').addClass('list');
}

$('.products-detail .images .sub-images img').click(function() {
    document.querySelector('#main-image img').src = this.src;
    new ImageZoom(document.getElementById("main-image"), options);
})