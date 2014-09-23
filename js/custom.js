$(document).ready(function(){
    //test to see if jQuery linked
    $('#resizeLeft').hover(enlarge, originalSize);
    $('#resizeMiddle').hover(enlarge, originalSize);
    $('#resizeRight').hover(enlarge, originalSize);
});

function enlarge(){
    $(this).css({height: '+=20%', width: '+=20%'});
}

function originalSize(){
     $(this).css({height: "", width: ""});
}