// $('.header form .input-search').change(function(e) {
//     console.log(this.value.length);
//     if (this.value.length > 0) {
//         $('.header form .btn-search').attr('type', 'submit');
//     }
// })

// $('.header form .btn-search').click(function(e) {
//     e.preventDefault();
// })
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