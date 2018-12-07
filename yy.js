$(document).ready(function(){
    $('.img-barcode').mouseenter(function(){
        $(this).attr('src','/public/images/barcode-black.svg');
    }).mouseleave(function(){
        $(this).attr('src','/public/images/barcode.svg');
    });
});