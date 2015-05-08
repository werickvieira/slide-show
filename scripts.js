
$(function(){

// 

var liWidth = $(".slide ul li").outerWidth(),  // Obtem a largura do ul li
      velocidade = 3500,
     rotate = setInterval(autoSlide,velocidade);
  
// Função que executa os slides sem clicar.

  function autoSlide(){
  
    $(".next").click();
  
    }




	// Show os botões #Next e #Prev
   
       $(".slide").hover(function(){
      
       $(".controle").fadeIn();

        clearInterval(rotate); // Interrompe o Interval

    }, function(){

       $(".controle").fadeOut();

        rotate = setInterval(autoSlide,velocidade); // Executa a função autoSlide

     }); 


     

   // Click #Next


   $(".next").click(function(e){

        e.preventDefault();

        $(".slide ul").css({ width:'99999%'}).animate({left:-liWidth}, function(){
          
           $(".slide ul li").last().after($(".slide ul li").first());

           $(this).css({'left':'0', 'width':'auto'});


          
        });

   });



// Click #Prev
  
    $(".prev").click(function(e){
 
          e.preventDefault();

      $(".slide ul li").first().before($(".slide ul li").last().css({'margin-left':-liWidth}));

      $(".slide ul").css({'width':'9999%'}).animate({left:liWidth}, function(){

           $(".slide ul li").first().css({'margin-left':'0'});

           $(this).css({'left':'0','width':'auto'});


      });


    });

  

});