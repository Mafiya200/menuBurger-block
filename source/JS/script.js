'use strict';

///Сделал функцию, которая принимает массив любых целых чисел,
/// которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


if (isMobile.any()) {
    $(`body`).addClass(`_touch`);
    $(`.arrow`).prev().addClass(`_active`);

    $(`.arrow`).click(function () {
        $(this).toggleClass(`_active`);
        $(this).next().toggleClass(`_open`);
    });
}
else {
    $(`body`).addClass(`_mouse`);

}

$(`.header__burger`).click(function(){
    $(this).toggleClass(`_active`);
    $(`.header__menu`).toggleClass(`_active`);
    $(`body`).toggleClass(`_lock`);
});

$(window).resize(function(){
    $(`.arrow`).removeClass(`_active`);
    $(`.arrow`).next().removeClass(`_open`);
    $(`.header__burger`).removeClass(`_active`);
    $(`.header__menu`).removeClass(`_active`);
    $(`body`).removeClass(`_lock`);

});

$(`.header__menu a`).click(function(){
    $(`.arrow`).removeClass(`_active`);
    $(`.arrow`).next().removeClass(`_open`);
    $(`.header__burger`).removeClass(`_active`);
    $(`.header__menu`).removeClass(`_active`);  
    $(`body`).removeClass(`_lock`);

});