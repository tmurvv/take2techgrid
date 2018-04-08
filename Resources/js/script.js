"use strict";

$(document).ready(function () {


    $(".navIcon").click(function() {

        var mainNav = $(".mainNav");
        var icon = $(".navIcon");
        var logo = $(".logo");


        if (icon.hasClass("ion-navicon")) {
            icon.addClass("ion-close");
            icon.removeClass("ion-navicon");
            icon.css("display", "block");
            mainNav.css("display", "block");


        } else {
            icon.addClass("ion-navicon");
            icon.removeClass("ion-close");

            icon.css("display", "block");
            mainNav.css("display", "none");
        }
    });

});
