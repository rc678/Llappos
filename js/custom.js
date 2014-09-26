$(document).ready(function(){
    //test to see if jQuery linked
    $('#resizeLeft').hover(enlarge, originalSize);
    $('#resizeMiddle').hover(enlarge, originalSize);
    $('#resizeRight').hover(enlarge, originalSize);
});

/*enlarges any element by 20%*/
function enlarge(){
    $(this).css({height: '+=20%', width: '+=20%'});
}

/*returns an element to it's original size*/
function originalSize(){
     $(this).css({height: "", width: ""});
}