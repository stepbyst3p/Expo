'use strict';

/**
 * @ngdoc function
 * @name expoMarketAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expoMarketAppApp
 */ 
angular.module('expoMarketAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
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
