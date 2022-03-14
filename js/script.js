$(function(){

    $('#footer-image').fadeOut(2000);

    $('#math1a').hover(

        function(){

            $('#text1').html('クリックすると数学1Aのページに移動')
            $('#text1').css('opacity','1');

        },

        function(){

            $('#text1').css('opacity','0');

        });
    
    $('#math2b').hover(

        function(){

            $('#text1').html('クリックすると数学2Bのページに移動');
            $('#text1').css('opacity','1');

        },

        function(){

            $('#text1').css('opacity','0');

        }
    );

    $('#math3').hover(

        function(){

            $('#text1').html('クリックすると数学3のページに移動');
            $('#text1').css('opacity','1');
        },

        function(){

            $('#text1').css('opacity','0');

        }

    );


})