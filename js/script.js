$(function () {
    // type js
    var typed = new Typed('.type', {
        strings: [
            'Web Designer',
            'A Php Developer',
            'Youtuber Also',
            'A Lecturer',
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 15,
        backDelay: 1500,
    });

    // sidebar js
    $('.open-bars').click(function () {
        $('.sidebar').toggleClass('show-menu');
    });
    $('.navbar-main ul li a').click(function () {
        $('.sidebar').removeClass('show-menu');
    });

    // $(".navbar-main li a").click(function () {
    //     $(".navbar-main li a").css("color", "#f1f1f1");
    //     $(this).css("color", "#2FBF71");
    // });

    // circle progressbar
    let Circle1 = document.getElementsByClassName('circle-1');
    let Circle2 = document.getElementsByClassName('circle-2');
    let Circle3 = document.getElementsByClassName('circle-3');
    let options = {
        type: 'circle',
        text: true,
        fontColor: '#FFFFFF',
        fontSize: 20,
        fontWeight: 900,
        fillParent: 'trnsparent',
        fillChild: 'transparent',
        interval: 2000,
        animated: true,
        strokeWidthParent: 8,
        strokeWidthChild: 8,
        progressColor: '#2FBF71',
        progressParentColor: '#404048'
    };
    new Progress(Circle1, options).inPercent();
    new Progress(Circle2, options).inPercent();
    new Progress(Circle3, options).inPercent();
});