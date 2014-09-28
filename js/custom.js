$(document).ready(function(){
    //test to see if jQuery linked
    createDialog();
    hoverEffect();
});

/*enlarges the images when the mouse hovers over it*/
function hoverEffect() {
    $('#resizeLeft').hover(enlarge, originalSize);
    $('#resizeMiddle').hover(enlarge, originalSize);
    $('#resizeRight').hover(enlarge, originalSize);
}

/*enlarges any element by 20%*/
function enlarge(){
    $(this).css({height: '+=20%', width: '+=20%'});
}

/*returns an element to it's original size*/
function originalSize(){
    $(this).css({height: "", width: ""});
}

/*creates a dialog box when picture is clicked*/
function createDialog(){
    $( "#resizeLeft" ).click(function() {
        $('#dialogLeft' ).dialog();
        $( "#dialogMiddle" ).dialog( "close" );
        $( "#dialogRight" ).dialog( "close" );
    });
    $( "#resizeMiddle" ).click(function() {
        $('#dialogMiddle').dialog();
        $( "#dialogLeft" ).dialog( "close" );
        $( "#dialogRight" ).dialog( "close" );
    });
    $( "#resizeRight" ).click(function() {
        $( '#dialogRight' ).dialog();
        $( "#dialogMiddle" ).dialog( "close" );
        $( "#dialogLeft" ).dialog( "close" );

    });
}