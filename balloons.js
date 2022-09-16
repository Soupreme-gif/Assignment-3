$(function(){

    $('#birthday').pickadate({ format: 'mmmm, d' });

    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

     // event listener for check/uncheck
     $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    //event listener for hovering over checkboxes
    // based off of code from https://www.w3schools.com/jquery/event_hover.asp
    $('.form-check-label').mouseenter( function () {

        if(this.id == "Red")
        {
            $('h1.Birthday').css('color', "red");
        }
        if(this.id == "Blue")
        {
            $('h1.Birthday').css('color', "blue");
        }
        if(this.id == "Green")
        {
            $('h1.Birthday').css('color', "green");
        }

    })

     // based off of code from https://www.w3schools.com/jquery/event_hover.asp
    $('.form-check-input').mouseleave( function () {
     
            $('h1.Birthday').css('color', "gray");   

    })

    //event listener for check all button clicked
    $('#checkall').on('click', function(e){ 

        e.preventDefault();

        $('#red').prop('checked', true);
        $('#redImg').css('visibility', 'visible');
        $('#redImg').removeClass().addClass('animate__animated animate__bounceInDown'); 


        $('#blue').prop('checked', true);
        $('#blueImg').css('visibility', 'visible');
        $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown');


        $('#green').prop('checked', true);
        $('#greenImg').css('visibility', 'visible');
        $('#greenImg').removeClass().addClass('animate__animated animate__bounceInDown')  

    })

    //event listener for uncheck all button clicked
    $('#uncheckall').on('click', function(e){ 

        e.preventDefault();

        $('#red').prop('checked', false);
        $('#redImg').css('visibility', 'visible');
        $('#redImg').removeClass().addClass('animate__animated animate__bounceOutUp'); 


        $('#blue').prop('checked', false);
        $('#blueImg').css('visibility', 'visible');
        $('#blueImg').removeClass().addClass('animate__animated animate__bounceOutUp');


        $('#green').prop('checked', false);
        $('#greenImg').css('visibility', 'visible');
        $('#greenImg').removeClass().addClass('animate__animated animate__bounceOutUp')  

    })

    //event listener for submit button with no boxes checked
    $('#submit').on('click', function(e){

        e.preventDefault();

        var toast = new Audio('toast.wav');


        // where this came from https://stackoverflow.com/questions/11159221/check-if-checkbox-is-not-checked-on-click-jquery
        if(!$('#red').is(':checked') && !$('#blue').is(':checked') && !$('#green').is(':checked'))
        {
            toast.play();
            $('#toast').toast({ autohide: false }).toast('show');
        }
    })

});


// this function randomly chooses one of three animations for happy birthday text to use
$(document).ready(function() {
    

    let animationNumber = Math.floor(Math.random() * 3);

    if(animationNumber == 0)
    {

        $('h1.Birthday').addClass('animate__animated animate__bounceInDown')

    }
    else if(animationNumber == 1)
    {
        $('h1.Birthday').addClass('animate__animated animate__bounce')
    }
    else if(animationNumber == 2)
    {
        $('h1.Birthday').addClass('animate__animated animate__rubberBand')
    }


})