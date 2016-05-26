$(document).ready(function () {

    $('.product-preview').on('mouseover', function () {
        $(this).find('.product-preview-text').hide();
        $(this).find('img').addClass('zoomed');
    });
    $('.product-preview').on('mouseout', function () {
        $('.product-preview-text').show();
        $(this).find('img').removeClass('zoomed');
    });

    /* select colors ======================================= */
    $('.product-colors > li > a').click(function () {
        $('.product-colors > li').removeClass('selected');
        $(this).parent().addClass('selected');
        return false;
    });
    $('.product-colors a').tooltip();


    /* off canvas menu ======================================= */
    $('.menu-link, .close-menu').on('click', function () {
        $('#wrap').toggleClass('menu-open');
        // $('.menu-wrapper').toggleClass('menu-show');
        return false;
    });
    $(window).bind("resize", function () {
        // console.log($(this).width())
        if ($(this).width() > 768) {
            $('div').removeClass('menu-open');
        }
    });

    $('#showmore').on('click', function () {
        $('#more-items').show();
        $(this).hide();
        return false
    });
});

//SideMenu
$('.side-menu ul li a').click(function () {
    var submenu = $(this).siblings('ul');
    submenu.toggleClass('open')
    if (submenu.length > 0) {
        if (submenu.hasClass('open')) {

        } else {

            return false;
        }
    }

});

var side_menu = $('.side-menu');
var node = side_menu[0].getElementsByClassName('active')[0];
$(node).parent().addClass('active');
var end = false;
if (node != undefined)
    while (end == false) {
        if (node.tagName == 'UL') {
            $(node).toggleClass('open');

        }
        node = node.parentNode;
        if (node == undefined || node.className == 'slide-menu') {
            end = true;
        }
    }
