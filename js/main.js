// plyr player
const player = new Plyr('#player');
$(document).ready(function () {

// scroll top
$('.back-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 0);
    return false;
});


    // input mask

    if ($('.phoneinp').length) {
        $('.phoneinp').inputmask({
            mask: "+1" + "9999999999",
            placeholder: "_",
            showMaskOnFocus: true,
            showMaskOnHover: true,
        });
    }

});


  
